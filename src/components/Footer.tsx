export default function Footer() {
  return (
    <footer className="bg-green-950 text-white mt-16 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center">
          {/* Informations du site */}
          <div className="w-full md:w-1/3 mb-6">
            <h2 className="text-2xl font-bold mb-4">TrekPack</h2>
            <p className="text-gray-400">
              Le site pour vous aider à gérer efficacement vos équipements et à
              préparer vos aventures.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 border-t border-gray-700 pt-4 text-gray-400">
          &copy; 2024 TrekPack. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
