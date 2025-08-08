import { useState } from "react";
import Logo from "./logo";
import Form from "./form";
import PackingList from "./packingList";
import Stats from "./Stats";
export default function App() {
  const [items, setItems] = useState([]);
  function handleItem(item) {
    setItems([...items, item]);
  }
  function ondelete(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function onToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function clearList() {
    const confirm = window.confirm("Are you sure you want to clear the list?");
    if (confirm) setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onhandleItem={handleItem} />
      <PackingList
        items={items}
        ondelete={ondelete}
        onToggleItem={onToggleItem}
        clearList={clearList}
      />
      <Stats items={items} />
    </div>
  );
}



