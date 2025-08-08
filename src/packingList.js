import { useState } from "react";
import Item from "./Item";

export default function PackingList({ items, ondelete, onToggleItem, clearList }) {
  const [sortBy, setSortBy] = useState("input");
  if (sortBy === "input") {
    items.sort((a, b) => a.id - b.id);
  } else if (sortBy === "description") {
    items.sort((a, b) => a.description.localeCompare(b.description));
  } else if (sortBy === "packed") {
    items.sort((a, b) => Number(a.packed) - Number(b.packed));
  }
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            itm={item}
            key={item.id}
            ondelete={ondelete}
            onToggleItem={onToggleItem} />
        ))}
      </ul>
      <div className="actions">
        <select onChange={(e) => setSortBy(e.target.value)} value={sortBy}>
          <option value="input">Sort by input</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed</option>
        </select>
        <button onClick={clearList}>Clear List</button>
      </div>
    </div>
  );
}
