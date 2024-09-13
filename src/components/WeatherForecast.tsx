"use client";
import React, { useState } from "react";
import getWeather from "../services/weatherService";

interface WeatherData {
  date: string;
  minTemp: number;
  maxTemp: number;
  description: string;
}

const WeatherForecast = () => {
  const [city, setCity] = useState(""); // Pas de ville par défaut
  const [weatherData, setWeatherData] = useState<WeatherData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null); // Pour gérer les erreurs
  const [searchedCity, setSearchedCity] = useState<string | null>(null); // Pour afficher la ville recherchée

  const fetchWeather = async (cityName: string) => {
    setLoading(true);
    setError(null); // Réinitialiser l'erreur
    try {
      const data = await getWeather(cityName);
      setWeatherData(data);
      setSearchedCity(cityName); // Met à jour la ville recherchée
    } catch (err) {
      setError(
        "Impossible de récupérer les prévisions météo pour cette ville."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  const handleSearch = () => {
    if (city) {
      fetchWeather(city);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-green-700 mb-2">
          Préparez votre sac en fonction de la météo
        </h1>
        <p className="text-md text-gray-600">
          Entrez la ville où vous allez pour voir les prévisions météo et
          planifiez votre sac en conséquence.
        </p>
      </div>

      {/* Champ pour saisir la ville */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          value={city}
          onChange={handleCityChange}
          className="border border-gray-300 rounded-lg p-2 text-sm text-black"
          placeholder="Entrez la ville"
        />
        <button
          onClick={handleSearch}
          className="ml-2 bg-green-700 text-white px-3 py-1 rounded-lg hover:bg-green-800 transition duration-200 text-sm"
        >
          Rechercher
        </button>
      </div>

      {loading && (
        <div className="flex justify-center items-center">
          <p className="text-lg font-semibold text-gray-700">
            Chargement des données météo...
          </p>
        </div>
      )}

      {error && <div className="text-red-500 text-center mb-4">{error}</div>}

      {searchedCity && !loading && weatherData.length > 0 && (
        <div>
          <h2 className="text-xl font-bold text-center mb-4 text-gray-900">
            Prévisions météo pour {searchedCity}
          </h2>
          <div className="flex justify-between space-x-2 overflow-x-auto pb-2">
            {weatherData.map((day) => (
              <div
                className="flex-shrink-0 bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center w-40"
                key={day.date}
              >
                <h3 className="text-md font-semibold text-gray-700">
                  {day.date}
                </h3>
                <p className="mt-1 text-gray-600 capitalize text-sm">
                  {day.description}
                </p>
                <div className="mt-1">
                  <p className="text-sm text-gray-500">
                    Min:{" "}
                    <span className="font-bold text-blue-500">
                      {day.minTemp}°C
                    </span>
                  </p>
                  <p className="text-sm text-gray-500">
                    Max:{" "}
                    <span className="font-bold text-red-500">
                      {day.maxTemp}°C
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mt-6 text-center">
        <p className="text-md text-gray-600">
          N&apos;oubliez pas de prendre des vêtements adaptés et de
          l&apos;équipement supplémentaire si des intempéries sont prévues. Bon
          trek !
        </p>
      </div>
    </div>
  );
};

export default WeatherForecast;
