// components/PieChart.tsx
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import Item from "@/@types/item";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

interface PieChartProps {
  items: Item[];
}

export default function PieChart({ items }: PieChartProps) {
  const categories = ["Vêtements", "Nourriture", "Équipement", "Autre"];

  // Calculer le poids par catégorie
  const categoryWeights = categories.map((category) =>
    items
      .filter((item) => item.category === category)
      .reduce((total, item) => total + item.weight * item.quantity, 0)
  );

  const data = {
    labels: categories,
    datasets: [
      {
        label: "Répartition du poids (kg)",
        data: categoryWeights,
        backgroundColor: [
          "#4CAF50", // Vert
          "#FF9800", // Orange
          "#2196F3", // Bleu
          "#FFC107", // Jaune
        ],
        hoverBackgroundColor: ["#45A049", "#FF8500", "#1976D2", "#FFB300"],
      },
    ],
  };

  const options = {
    plugins: {
      datalabels: {
        color: "#fff",
        formatter: (value: number) => `${value.toFixed(2)} kg`, // Afficher le poids avec 2 décimales
        font: {
          weight: "bold" as const, // Corriger le type ici
        },
      },
      legend: {
        position: "bottom" as const,
      },
    },
  };

  return (
    <div className="w-full max-w-md mx-auto mt-8">
      <Pie data={data} options={options} />
    </div>
  );
}
