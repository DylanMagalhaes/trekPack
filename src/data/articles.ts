export interface Article {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  content: string;
}

export const articles: Article[] = [
  {
    id: 1,
    title: "Choisir le bon litrage de sac",
    description:
      "Le litrage dépend de la durée et du type de trek. Optez pour un sac entre 30 et 70 litres en fonction de vos besoins en autonomie.",
    image: "/images/backpack-size.jpg",
    link: "/article/choisir-bon-litrage-sac",
    content: `
      <h2 class="text-2xl font-bold text-green-700 mb-4">Pourquoi le choix du litrage est crucial ?</h2>
      <p class="mb-4">Le choix du bon litrage est essentiel pour un trek confortable. Il influence non seulement la quantité de matériel que vous pouvez emporter, mais aussi votre confort pendant la marche. Trop grand, et vous risquez de surcharger votre sac ; trop petit, et vous pourriez manquer d'équipement vital.</p>

      <h3 class="text-xl font-semibold mb-3 text-gray-700">Les différents types de sacs en fonction du trek</h3>
      <ul class="list-disc pl-5 mb-4">
        <li><strong>Randonnée à la journée</strong> : Un sac de 30 à 35 litres suffira. Il pourra accueillir une veste, des provisions, et une trousse de secours.</li>
        <li><strong>Trek de plusieurs jours avec nuitée en refuge</strong> : Un sac d'environ 50 litres est recommandé. Cela vous permet de transporter un sac de couchage, des vêtements de rechange, de la nourriture, et des accessoires de cuisine.</li>
        <li><strong>Trek en autonomie complète</strong> : Pour des treks plus longs, avec plusieurs nuits en extérieur, un sac de 60 à 70 litres est nécessaire. Ce volume permet de transporter tout l’équipement nécessaire, y compris une tente, un réchaud, et de la nourriture pour plusieurs jours.</li>
      </ul>

      <h3 class="text-xl font-semibold mb-3 text-gray-700">Comment ajuster la capacité à votre morphologie</h3>
      <p class="mb-4">Il est important d’adapter votre sac à votre morphologie. Certains sacs ont des systèmes de réglage en fonction de la taille du dos. D’autres, plus sophistiqués, permettent des ajustements précis pour répartir correctement le poids sur les hanches et le dos.</p>

      <h3 class="text-xl font-semibold mb-3 text-gray-700">Conseils pour ne pas surcharger votre sac</h3>
      <p class="mb-4">Assurez-vous de ne pas surcharger votre sac : une règle de base est que le poids total ne doit pas dépasser 20% de votre poids corporel pour éviter les blessures ou une fatigue excessive. Pensez à n'emporter que l'essentiel et à optimiser le rangement.</p>
    `,
  },
  {
    id: 2,
    title: "Ajuster correctement le sac",
    description:
      "Un bon ajustement est crucial. Veillez à régler la ceinture abdominale et les bretelles pour répartir le poids sur le bassin.",
    image: "/images/backpack-adjustment.jpg",
    link: "/article/ajuster-correctement-sac",
    content: `
      <h2 class="text-2xl font-bold text-green-700 mb-4">Pourquoi un bon ajustement est essentiel ?</h2>
      <p class="mb-4">Un sac à dos mal ajusté peut causer des douleurs aux épaules, au dos et aux hanches. Bien ajuster votre sac améliore votre confort et votre endurance, surtout sur de longues distances.</p>

      <h3 class="text-xl font-semibold mb-3 text-gray-700">Étapes pour ajuster votre sac à dos</h3>
      <ol class="list-decimal pl-5 mb-4">
        <li><strong>Ajustez la ceinture abdominale</strong> : C'est la première étape, car cette partie porte la majorité du poids. Placez-la autour de vos hanches, et non au niveau de la taille, pour que le poids repose sur votre bassin.</li>
        <li><strong>Réglez les bretelles</strong> : Une fois la ceinture abdominale bien placée, ajustez les bretelles pour qu'elles reposent confortablement sur vos épaules sans créer de points de pression. Assurez-vous que le sac ne pend pas trop bas.</li>
        <li><strong>Serrez les rappels de charge</strong> : Ces petites sangles se trouvent sur le haut des bretelles. Elles permettent de rapprocher le sac de votre dos et de réduire son mouvement pendant la marche.</li>
        <li><strong>Ajustez la sangle de poitrine</strong> : Elle aide à stabiliser les bretelles et à empêcher le sac de glisser vers l’arrière, en particulier lors de terrains accidentés.</li>
      </ol>

      <h3 class="text-xl font-semibold mb-3 text-gray-700">Testez le sac avant de partir</h3>
      <p class="mb-4">Il est toujours conseillé de tester l'ajustement de votre sac avant de partir. Mettez-le sur vos épaules avec la charge prévue et marchez quelques kilomètres pour ajuster les sangles selon votre confort. Cela vous évitera des ajustements en plein trek.</p>
    `,
  },
  {
    id: 3,
    title: "Optimiser le remplissage",
    description:
      "Placez les objets lourds près du dos et gardez les accessoires fréquemment utilisés dans des poches accessibles.",
    image: "/images/backpack-packing.jpg",
    link: "/article/optimiser-remplissage-sac",
    content: `
      <h2 class="text-2xl font-bold text-green-700 mb-4">Pourquoi l'optimisation du remplissage est cruciale ?</h2>
      <p class="mb-4">Un sac bien organisé réduit le risque de fatigue et augmente votre efficacité pendant le trek. Un remplissage équilibré garantit une bonne répartition du poids, évitant ainsi de déséquilibrer votre corps pendant la marche.</p>

      <h3 class="text-xl font-semibold mb-3 text-gray-700">Comment bien répartir le poids dans votre sac</h3>
      <ul class="list-disc pl-5 mb-4">
        <li><strong>Au fond du sac</strong> : Placez des objets légers, comme un sac de couchage ou des vêtements.</li>
        <li><strong>Le long du dos</strong> : Les objets les plus lourds (réchaud, nourriture, tente) doivent être placés près du bas du dos pour un meilleur équilibre. Cela aide à répartir le poids et évite d'avoir une charge déséquilibrée qui pourrait tirer vers l'arrière.</li>
        <li><strong>Dans la partie supérieure</strong> : Les objets auxquels vous avez souvent besoin d'accéder, comme une veste de pluie ou des snacks, doivent être faciles à atteindre, soit dans la poche supérieure, soit dans des poches latérales.</li>
      </ul>

      <h3 class="text-xl font-semibold mb-3 text-gray-700">Utilisation des sangles de compression</h3>
      <p class="mb-4">Utilisez les sangles de compression pour maintenir le tout bien en place et empêcher les mouvements de votre équipement à l’intérieur du sac. Cela permet aussi de stabiliser la charge lorsque le sac est partiellement rempli.</p>
    `,
  },
  {
    id: 4,
    title: "Ne rien oublier !",
    description:
      "Consultez notre check-list complète pour ne rien oublier avant votre départ, des vêtements au matériel indispensable.",
    image: "/images/backpack-checklist.jpg",
    link: "/article/ne-rien-oublier-checklist",
    content: `
      <h2 class="text-2xl font-bold text-green-700 mb-4">Check-list avant de partir en trek</h2>
      <p class="mb-4">Pour être bien préparé, voici une liste des éléments essentiels à emporter :</p>
      <ul class="list-disc pl-5 mb-4">
        <li><strong>Vêtements adaptés</strong> : plusieurs couches pour ajuster selon la météo, comme des t-shirts respirants, une veste imperméable, et une polaire pour les soirées froides.</li>
        <li><strong>Équipement de couchage</strong> : un sac de couchage adapté aux températures nocturnes, un tapis de sol pour plus de confort, et un oreiller gonflable pour la nuit.</li>
        <li><strong>Nourriture et eau</strong> : Des rations légères mais riches en énergie, de l'eau en quantité suffisante ou un système de purification.</li>
      </ul>

      <h3 class="text-xl font-semibold mb-3 text-gray-700">Conseils pour ne rien oublier</h3>
      <p class="mb-4">Organisez vos affaires dans des sacs compartimentés pour éviter de chercher dans tout le sac. Vérifiez votre équipement la veille pour passer en revue tous vos essentiels, des vêtements à la nourriture en passant par les accessoires de sécurité.</p>
    `,
  },
  {
    id: 6,
    title: "Tentes ultra-légères pour bivouac",
    description:
      "Explorez notre sélection des meilleures tentes ultra-légères pour les trekkings en autonomie, parfaites pour un bivouac confortable.",
    image: "/images/lightweight-tents.jpg",
    link: "/article/tentes-ultralegeres-bivouac",
    content: `
      <h2 class="text-2xl font-bold text-green-700 mb-4">Pourquoi choisir une tente ultra-légère ?</h2>
      <p class="mb-4">Pour les treks en autonomie, chaque gramme compte. Une tente ultra-légère vous permet de transporter un abri sans sacrifier le confort ni la protection contre les intempéries.</p>

      <h3 class="text-xl font-semibold mb-3 text-gray-700">Les matériaux des tentes modernes</h3>
      <p class="mb-4">Les tentes ultra-légères utilisent généralement des matériaux comme le nylon ripstop et des arceaux en aluminium léger. Ces matériaux offrent une excellente résistance au vent et à la pluie, tout en restant faciles à transporter.</p>

      <h3 class="text-xl font-semibold mb-3 text-gray-700">Comparaison des modèles</h3>
      <ul class="list-disc pl-5 mb-4">
        <li><strong>Tentes autoportantes</strong> : Elles sont faciles à monter et offrent une bonne stabilité, même en terrain accidenté.</li>
        <li><strong>Tentes nécessitant des piquets</strong> : Plus légères et souvent moins chères, elles nécessitent un sol meuble pour l’installation.</li>
      </ul>

      <h3 class="text-xl font-semibold mb-3 text-gray-700">Conseils pour choisir la bonne tente</h3>
      <p class="mb-4">Prenez en compte la saison, la météo et le type de terrain que vous allez rencontrer pour choisir une tente adaptée à vos besoins. Assurez-vous également qu'elle soit facile à monter et démonter.</p>
    `,
  },
];
