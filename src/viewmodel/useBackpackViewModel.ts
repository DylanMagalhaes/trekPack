import { useState } from "react";
import Item from "@/@types/item";

export default function useBackpackViewModel() {
  const [items, setItems] = useState<Item[]>([]);
  const [newItemName, setNewItemName] = useState<string>("");
  const [newItemQuantity, setNewItemQuantity] = useState<number>(1);
  const [newItemWeight, setNewItemWeight] = useState<number>(0);
  const [newItemCategory, setNewItemCategory] = useState<string>("Vêtements");

  // Calcul du poids total
  const totalWeight = items.reduce(
    (total, item) => total + item.quantity * item.weight,
    0
  );

  // Ajouter un article
  const addItem = () => {
    if (newItemName.trim() === "" || newItemWeight <= 0) return;
    const newItem: Item = {
      id: items.length + 1,
      name: newItemName,
      quantity: newItemQuantity,
      weight: newItemWeight,
      category: newItemCategory,
    };
    setItems([...items, newItem]);
    resetNewItemForm();
  };

  // Supprimer un article
  const removeItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  // Mettre à jour la quantité d'un article
  const updateQuantity = (id: number, quantity: number) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, quantity: quantity } : item
      )
    );
  };

  // Réinitialiser le formulaire de nouvel article
  const resetNewItemForm = () => {
    setNewItemName("");
    setNewItemQuantity(1);
    setNewItemWeight(0);
    setNewItemCategory("Vêtements");
  };

  return {
    items,
    setItems, // Ajout de setItems ici
    totalWeight,
    newItemName,
    setNewItemName,
    newItemQuantity,
    setNewItemQuantity,
    newItemWeight,
    setNewItemWeight,
    newItemCategory,
    setNewItemCategory,
    addItem,
    removeItem,
    updateQuantity,
  };
}
