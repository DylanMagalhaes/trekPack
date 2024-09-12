import Item from "@/@types/item";

interface BackpackTableProps {
  items: Item[];
  updateQuantity: (id: number, quantity: number) => void;
  removeItem: (id: number) => void;
}

export default function BackpackTable({
  items,
  updateQuantity,
  removeItem,
}: BackpackTableProps) {
  return (
    <div className="hidden sm:block">
      <table className="min-w-full table-auto text-sm sm:text-base">
        <thead>
          <tr>
            <th className="px-2 sm:px-4 py-2 text-left text-gray-600">
              Article
            </th>
            <th className="px-2 sm:px-4 py-2 text-left text-gray-600">
              Catégorie
            </th>
            <th className="px-2 sm:px-4 py-2 text-left text-gray-600">
              Quantité
            </th>
            <th className="px-2 sm:px-4 py-2 text-left text-gray-600">
              Poids (kg)
            </th>
            <th className="px-2 sm:px-4 py-2 text-left text-gray-600">
              Total (kg)
            </th>
            <th className="px-2 sm:px-4 py-2 text-left text-gray-600">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} className="border-t text-black">
              <td className="px-2 sm:px-4 py-2">{item.name}</td>
              <td className="px-2 sm:px-4 py-2">{item.category}</td>
              <td className="px-2 sm:px-4 py-2">
                <input
                  type="number"
                  min="1"
                  className="border border-gray-300 rounded px-2 py-1 w-12 sm:w-16"
                  value={item.quantity}
                  onChange={(e) =>
                    updateQuantity(item.id, Number(e.target.value))
                  }
                />
              </td>
              <td className="px-2 sm:px-4 py-2">{item.weight.toFixed(2)}</td>
              <td className="px-2 sm:px-4 py-2">
                {(item.quantity * item.weight).toFixed(2)}
              </td>
              <td className="px-2 sm:px-4 py-2">
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
