import { notFound } from "next/navigation";
import { articles } from "../../../data/articles";
import Image from "next/image";
import { ArticleContent } from "../../../components/ArticleContent";

export default function ArticlePage({ params }: { params: { name: string } }) {
  const article = articles.find(
    (article) => article.link.split("/").pop() === params.name
  );

  if (!article) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-16 bg-white">
      {/* Image principale */}
      <div className="relative w-full mb-12">
        <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src={article?.image}
            alt={article?.title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-500 ease-in-out hover:scale-105"
          />
        </div>
      </div>

      {/* Passer les données à un composant client */}
      <ArticleContent
        title={article?.title}
        description={article?.description}
        content={article?.content}
      />

      {/* Lien retour */}
      <div className="mt-12 text-center">
        <a
          href="/"
          className="inline-block px-6 py-3 text-lg font-semibold text-white bg-green-800 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300"
        >
          &larr; Retour
        </a>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    name: article.link.split("/").pop(),
  }));
}
