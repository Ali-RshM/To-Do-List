export  default function Item({ itm, ondelete, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={itm.packed}
        onChange={() => onToggleItem(itm.id)}
      />
      <span style={itm.packed ? { textDecoration: "line-through" } : {}}>
        {itm.quantity} {itm.description} {/* change here */}
      </span>
      <button onClick={() => ondelete(itm.id)}>❌</button>
    </li>
  );
}
