import axios from "axios";
import { WeatherApiResponse } from "@/@types/weatherApiResponse"; // Assure-toi d'importer ton type

const API_WEATHER_KEY = process.env.NEXT_PUBLIC_API_WEATHER_KEY;

interface WeatherData {
  date: string;
  minTemp: number;
  maxTemp: number;
  description: string; // Ajout de la description
}

const getWeather = async (city: string): Promise<WeatherData[]> => {
  try {
    const response = await axios.get<WeatherApiResponse>(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_WEATHER_KEY}&units=metric&lang=fr`
    );
    const weatherData = response.data.list;

    const dailyTemperatures: {
      [key: string]: { min: number; max: number; description: string };
    } = {};

    weatherData.forEach((entry) => {
      const date = new Date(entry.dt * 1000).toLocaleDateString("fr-FR");

      if (!dailyTemperatures[date]) {
        dailyTemperatures[date] = {
          min: entry.main.temp_min,
          max: entry.main.temp_max,
          description: entry.weather[0].description, // Prendre la description météo pour ce jour
        };
      } else {
        dailyTemperatures[date].min = Math.min(
          dailyTemperatures[date].min,
          entry.main.temp_min
        );
        dailyTemperatures[date].max = Math.max(
          dailyTemperatures[date].max,
          entry.main.temp_max
        );
      }
    });

    return Object.keys(dailyTemperatures)
      .slice(0, 6)
      .map((date) => ({
        date,
        minTemp: dailyTemperatures[date].min,
        maxTemp: dailyTemperatures[date].max,
        description: dailyTemperatures[date].description, // Inclure la description météo dans la réponse
      }));
  } catch (error) {
    console.error("Erreur lors de la récupération des données météo :", error);
    return [];
  }
};

export default getWeather;
