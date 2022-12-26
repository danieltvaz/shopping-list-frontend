import AddButton from "./components/atoms/add-button";
import { Item } from "./types/item";
import ListItem from "./components/molecules/list-item";
import MainContainer from "./components/layout/main-container";
import SearchBar from "./components/molecules/search-bar";
import TodoList from "./components/molecules/todo-list";
import localStorageHandler from "./utils/local-storage-handler";
import { useEffect } from "react";
import useList from "./hooks/useList";

export default function App() {
  const { items, addItem, removeItem, updateItem } = useList();
  const { onBootDataHandler } = localStorageHandler();

  useEffect(() => onBootDataHandler(), []);

  return (
    <MainContainer>
      <SearchBar addItem={addItem} />
      <TodoList>
        {items.map((item) => (
          <ListItem item={item} key={item.id} removeItem={removeItem} updateItem={updateItem} />
        ))}
      </TodoList>
    </MainContainer>
  );
}
