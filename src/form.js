import { useState } from "react";
export default function Form({ onhandleItem }) {
  const [descript, setDescript] = useState("");
  const [quantity, setQuantity] = useState(1);
  function handleSubmit(e) {
    e.preventDefault();
    if (!descript) return;
    const newItem = {
      description: descript, // <-- change here
      quantity,
      id: Date.now(),
      packed: false,
    };
    onhandleItem(newItem);
    setDescript("");
    setQuantity(1);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 Trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="item..."
        value={descript}
        onChange={(e) => setDescript(e.target.value)}
      />

      <button>add</button>
    </form>
  );
}