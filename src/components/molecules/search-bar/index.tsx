import "./styles.css";
import "./styles.css";

import { useEffect, useRef, useState } from "react";

import AddButton from "../../atoms/add-button";
import { Item } from "../../../types/item";
import TextInput from "../../atoms/text-input";

type SearchBarProps = {
  addItem: (item: Omit<Item, "id">) => any | void;
};

export default function SearchBar({ addItem }: SearchBarProps) {
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  function handleAdd() {
    if (inputRef.current!.value) {
      addItem({ description: inputRef.current!.value, done: false });
      setInput("");
    }
  }

  function keyupHandle(event: any) {
    if (event.key === "Enter") handleAdd();
  }

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.addEventListener("keyup", keyupHandle);
    }

    return () => inputRef.current?.removeEventListener("keyup", keyupHandle);
  }, []);

  return (
    <header className="searchbar__header">
      <section className="searchbar__wrapper">
        <TextInput placeholder="novo item" value={input} onChange={(event: any) => setInput(event.target.value)} ref={inputRef} />
        <AddButton onClick={handleAdd} />
      </section>
    </header>
  );
}
