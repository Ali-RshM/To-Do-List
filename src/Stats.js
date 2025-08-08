export  default function Stats({ items }) {
  if (items.length === 0) {
    return (
      <p className="stats">
        {" "}
        <em>Start adding some items to your packing list! 😊</em>
      </p>
    );
  }
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <div className="stats">
      <footer>
        {percentage === 100 ? (
          <em>🎉 You got everything packed!</em>
        ) : (
          <em>
            💼 You hve {numItems} item on your list ,and you already packed{" "}
            {numPacked} ({percentage}%)
          </em>
        )}
      </footer>
    </div>
  );
}
