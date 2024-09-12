interface AddItemFormProps {
  newItemName: string;
  setNewItemName: (value: string) => void;
  newItemQuantity: number;
  setNewItemQuantity: (value: number) => void;
  newItemWeight: number;
  setNewItemWeight: (value: number) => void;
  newItemCategory: string;
  setNewItemCategory: (value: string) => void;
  addItem: () => void;
}

export default function AddItemForm({
  newItemName,
  setNewItemName,
  newItemQuantity,
  setNewItemQuantity,
  newItemWeight,
  setNewItemWeight,
  newItemCategory,
  setNewItemCategory,
  addItem,
}: AddItemFormProps) {
  return (
    <div className="bg-white p-4 sm:p-6 shadow-lg text-black rounded-lg mb-8">
      <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-black">
        Ajouter un article
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <label className="block text-gray-700 font-medium mb-1 sm:mb-2">
            Nom
          </label>
          <input
            type="text"
            placeholder="Nom de l'article"
            className="border border-gray-300 rounded px-4 py-2 w-full"
            value={newItemName}
            onChange={(e) => setNewItemName(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1 sm:mb-2">
            Catégorie
          </label>
          <select
            className="border border-gray-300 rounded px-4 py-2 w-full"
            value={newItemCategory}
            onChange={(e) => setNewItemCategory(e.target.value)}
          >
            <option value="Vêtements">Vêtements</option>
            <option value="Nourriture">Nourriture</option>
            <option value="Équipement">Équipement / Accessoires</option>
            <option value="Autre">Autre</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1 sm:mb-2">
            Quantité
          </label>
          <input
            type="number"
            min="1"
            className="border border-gray-300 rounded px-4 py-2 w-full"
            value={newItemQuantity}
            onChange={(e) => setNewItemQuantity(Number(e.target.value))}
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1 sm:mb-2">
            Poids (kg)
          </label>
          <input
            type="number"
            min="0"
            step="0.01"
            className="border border-gray-300 rounded px-4 py-2 w-full"
            value={newItemWeight}
            onChange={(e) => setNewItemWeight(Number(e.target.value))}
          />
        </div>
      </div>

      <div className="mt-6 text-center">
        <button
          onClick={addItem}
          className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-900 transition"
        >
          Ajouter
        </button>
      </div>
    </div>
  );
}
