import { articles } from "@/data/articles";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Section 1: Image de couverture avec phrase accrocheuse */}
      <div
        className="relative h-[85vh] bg-cover bg-center"
        style={{ backgroundImage: "url(/images/home.JPG)" }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent flex flex-col items-center justify-center">
          <h1 className="text-white text-6xl font-bold text-center mb-4 drop-shadow-lg">
            Préparez Votre Aventure
          </h1>
          <p className="text-white text-2xl text-center mb-8 drop-shadow-lg">
            Organisez votre sac à dos pour des randonnées sans stress
          </p>
          <a
            href="/bag"
            className="px-6 py-3 bg-green-800 text-white rounded-full text-lg font-semibold hover:bg-green-900 transition duration-300 ease-in-out shadow-lg"
          >
            Organiser mon sac
          </a>
        </div>
      </div>

      <div className="py-16 bg-gray-50">
        {/* Section 2: Articles de gestion du sac à dos */}
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-12 text-green-700 tracking-wide">
            Le Guide Complet pour Préparer Votre Sac de Trek
          </h2>

          {/* Section de cartes d'articles générées dynamiquement */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {articles.map((article) => (
              <div
                key={article.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out"
              >
                <img
                  className="w-full h-56 object-cover"
                  src={article.image}
                  alt={article.title}
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-gray-800">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{article.description}</p>

                  {/* Lien vers la page de l'article */}
                  <Link className="text-green-700" href={article.link}>
                    En savoir plus &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
