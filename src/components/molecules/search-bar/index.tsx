import "./styles.css";

import { useCallback, useState } from "react";

import Button from "../../atoms/button";
import { Product } from "../../../types/product";
import Spacer from "../../atoms/spacer";
import TextInput from "../../atoms/text-input";

type SearchBarProps = {
  addItem: (item: Omit<Product, "id">) => Promise<void>;
  searchItem: (searchText: string) => any | void;
  uncheckAll: () => any | void;
};

export default function SearchBar({ addItem, searchItem, uncheckAll }: SearchBarProps) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [searchText, setSearchText] = useState("");

  const handleAddItem = useCallback(() => {
    addItem({
      productName: name,
      price: price,
      checked: false,
    });
  }, [addItem, name, price]);

  function handleSearch() {
    searchItem(searchText);
  }

  function handleUncheckAll() {
    uncheckAll();
  }

  return (
    <header className="searchbar__header">
      <section className="searchbar__wrapper">
        <div className="searchbar__add-item_wrapper">
          <TextInput
            placeholder="New item"
            value={name}
            onChange={(event: any) => setName(event.target.value)}
            width="100%"
            flex={1}
          />
          <Spacer orientation="horizontal" size="4px" />
          <TextInput
            placeholder="Price"
            value={price}
            onChange={(event: any) => setPrice(event.target.value)}
            width="100%"
            flex={0.3}
            type="number"
            icon={false}
          />
          <Spacer orientation="horizontal" size="12px" />
          <Button onClick={handleAddItem} text="Add" icon />
        </div>
        <Spacer orientation="vertical" size="12px" />
        <div className="searchbar__search-item_wrapper">
          <TextInput
            placeholder="Search item"
            value={searchText}
            onChange={(event: any) => setSearchText(event.target.value)}
            width="100%"
            flex={1}
            icon={false}
          />
          <Spacer orientation="horizontal" size="12px" />
          <Button onClick={handleSearch} text="&#10005;" icon={false} variant="danger" size="73px" />
          <Spacer orientation="horizontal" size="4px" />
          <Button
            onClick={() => {
              setSearchText("");
              handleSearch();
            }}
            text="&#9906;"
            icon={false}
            size="73px"
          />
        </div>
        <Spacer orientation="vertical" size="12px" />
        <div className="searchbar__options_wrapper">
          <Button text="Uncheck all" onClick={handleUncheckAll} variant="danger" size="auto" />
        </div>
        <Spacer orientation="vertical" size="12px" />
      </section>
    </header>
  );
}
