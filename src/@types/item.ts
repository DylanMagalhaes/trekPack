export default interface Item {
  id: number;
  name: string;
  quantity: number;
  weight: number; // Ajout du poids pour chaque article
  category: string; // Ajout d'une catégorie
}
