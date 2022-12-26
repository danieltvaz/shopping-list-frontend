import { LocalStorageKeys } from "../constants/local-storage";

export default function localStorageHandler() {
  function saveData<T>(key: string, data: T) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  function getData<T>(key: string): T {
    const parsedData = JSON.parse(localStorage.getItem(key) ?? "[]");
    return parsedData;
  }

  function onBootDataHandler() {
    const alreadyExists = JSON.parse(localStorage.getItem(LocalStorageKeys.data) ?? "[]").length > 0;
    if (alreadyExists) return;
    localStorage.setItem(LocalStorageKeys.data, JSON.stringify([]));
  }

  return { saveData, getData, onBootDataHandler };
}
