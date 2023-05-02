import type {Item} from "./types";

import {useEffect, useState} from "react";

import styles from "./App.module.scss";
import api from "./api";

function App() {
  const [items, setItems] = useState<Item[] | null>(null);

  useEffect(() => {
    api.list().then(setItems);
  }, []);

  const handleDelete = (id: number) => {
    setItems((item: Item) => item?.filter((item: Item) => item.id !== id))
  };

  return (
    <main className={styles.main}>
      <h1>Supermarket list</h1>
      <form>
        <input autoFocus name="text" type="text" />
        <button>Add</button>
      </form>
      <ul>
        {items && items.map((item, index) => (
          <li  key = {index} className={item.completed ? styles.completed : ""} >
            {item.text} <button onClick = { () => handleDelete(item.id)}>[X]</button>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
