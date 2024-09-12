"use client";

export function ArticleContent({
  title,
  description,
  content,
}: {
  title: string;
  description: string;
  content: string;
}) {
  return (
    <div className="max-w-3xl mx-auto text-center">
      {/* Titre de l'article */}
      <h1 className="text-6xl font-extrabold text-gray-900 mb-6 tracking-tight drop-shadow-lg">
        {title}
      </h1>

      {/* Description courte */}
      <p className="text-xl text-gray-700 mb-8 leading-relaxed">
        {description}
      </p>

      {/* Contenu détaillé de l'article avec HTML rendu */}
      <div
        className="prose prose-lg text-left mx-auto max-w-none text-gray-800 leading-relaxed tracking-wide"
        dangerouslySetInnerHTML={{ __html: content }} // Rendu HTML sécurisé
      ></div>
    </div>
  );
}
