import { useState } from "react";

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState(""); // Use this controll the particular portion of the form
  const [quantity, setQuantity] = useState(1); // Use this controll the particular portion of the form

  function handleSubmit(e) {
    e.preventDefault(); // Prevent page for performing default behaviour like page reload

    if (!description) return;

    const newItem = { description, quantity, package: false, id: Date.now() };
    onAddItems(newItem);
    setDescription(""); // Seting it to the default state
    setQuantity(1); // Seting it to the default state
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip ?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item...."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
