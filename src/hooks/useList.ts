import { useEffect, useState } from "react";

import { Item } from "../types/item";
import { LocalStorageKeys } from "../constants/local-storage";
import localStorageHandler from "../utils/local-storage-handler";

export default function useList() {
  const [items, setItems] = useState([] as Item[]);
  const { getData, saveData } = localStorageHandler();

  function updateItem(item: Item) {
    const newItems = items.map((existingItem) => (existingItem.id === item.id ? { ...item } : { ...existingItem }));
    setItems([...newItems]);
  }

  function addItem(item: Omit<Item, "id">) {
    setItems((prev) => [...prev, { ...item, id: new Date().getTime() }]);
  }

  function removeItem(item: Item) {
    const newItems = items.filter((existingItem) => (existingItem.id === item.id ? false : true));
    setItems([...newItems]);
  }

  function storageToQueryString(storage: Item[]) {
    const base64Storage = storage.map((item) => btoa(JSON.stringify(item)));
    return base64Storage;
  }

  function setQueryString(data: string[]) {
    const params = new URLSearchParams(window.location.search);
    data.forEach((data) => {
      params.set("l", data);
    });
    window.history.pushState({ path: window.location.href + params.toString() }, "", window.location.href + "?" + params.toString());
    // window.location.search = params.toString();
  }

  useEffect(() => setItems(getData(LocalStorageKeys.data)), []);

  useEffect(() => {
    if (items.length) {
      setQueryString(storageToQueryString(items));
      saveData(LocalStorageKeys.data, items);
    }
  }, [items]);

  return { updateItem, addItem, removeItem, items };
}
