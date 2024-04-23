import React, { useState } from "react";
import Entry from "./Item";

function Form() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [items, setItems] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    if (!name) return;

    const newItem = {
      title: name,
      quantity: quantity,
      isChecked: false,
      id: Date.now(),
    };
    setItems([...items, newItem]);
    setName("");
    setQuantity(1);
  }

  function handleDelete(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  return (
    <div className="form-container">
      <div className="input-container">
        <form onSubmit={handleSubmit}>
          <select
            className="quantity"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
          >
            {Array.from({ length: 20 }, (_, index) => index + 1).map(
              (number) => (
                <option key={number} value={number}>
                  {number}
                </option>
              )
            )}
          </select>
          <input
            className="add-item"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Add an item..."
          />
          <button type="submit">Add</button>
        </form>
      </div>
      <ul className="entries-list">
        {items.map((item) => (
          <Entry key={item.id} item={item} onDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
}

export default Form;
