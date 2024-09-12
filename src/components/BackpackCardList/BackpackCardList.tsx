import Item from "@/@types/item";

interface BackpackCardListProps {
  items: Item[];
  updateQuantity: (id: number, quantity: number) => void;
  removeItem: (id: number) => void;
}

export default function BackpackCardList({
  items,
  updateQuantity,
  removeItem,
}: BackpackCardListProps) {
  return (
    <div className="block sm:hidden text-black">
      {items.map((item) => (
        <div
          key={item.id}
          className={`border rounded-lg p-4 mb-4`} // Appliquer la classe CSS dynamique
        >
          <div className="flex justify-between">
            <span className="font-semibold text-gray-700">Article :</span>
            <span>{item.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold text-gray-700">Catégorie :</span>
            <span>{item.category}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold text-gray-700">Quantité :</span>
            <input
              type="number"
              min="1"
              className="border border-gray-300 rounded px-2 py-1 w-12"
              value={item.quantity}
              onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
            />
          </div>
          <div className="flex justify-between">
            <span className="font-semibold text-gray-700">Poids (kg) :</span>
            <span>{item.weight.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold text-gray-700">Total (kg) :</span>
            <span>{(item.quantity * item.weight).toFixed(2)}</span>
          </div>
          <div className="mt-2 text-right">
            <button
              onClick={() => removeItem(item.id)}
              className="text-red-600 hover:text-red-800"
            >
              Supprimer
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
