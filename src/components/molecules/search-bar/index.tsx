import "./styles.css";

import { useCallback, useContext, useState } from "react";

import Button from "../../atoms/button";
import FlexContainer from "../../atoms/flex-container";
import { Product } from "../../../types/product";
import { ProductsContext } from "../../../contexts/products/productsContext";
import Select from "../../atoms/select";
import TextInput from "../../atoms/text-input";

export default function SearchBar() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [searchText, setSearchText] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unit, setUnit] = useState<Product["unit"]>("KG");
  const { addItem, uncheckAll, getItems } = useContext(ProductsContext);

  const handleAddItem = useCallback(async () => {
    await addItem({
      productName: name,
      price: price,
      checked: false,
      quantity,
      unit,
    });

    setName("");
    setPrice("");
    setQuantity("0");
    setUnit("KG");
  }, [addItem, name, price, quantity, unit]);

  function handleSearch() {
    getItems(searchText);
  }

  function handleUncheckAll() {
    uncheckAll();
  }

  return (
    <FlexContainer>
      <FlexContainer flexDirection={{ small: "column" }} gap={{ small: "12px" }} flexGrow={{ small: 1 }}>
        <FlexContainer flexDirection={{ small: "column" }} gap={{ small: "8px" }}>
          <TextInput
            placeholder="New item"
            value={name}
            onChange={(event) => setName(event.target.value)}
            width="100%"
            flex={1}
          />
          <FlexContainer gap={{ small: "8px" }}>
            <TextInput
              placeholder="Price"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
              width="100%"
              flex={1}
              type="number"
            />
            <TextInput
              placeholder="Quantity"
              value={quantity}
              onChange={(event) => setQuantity(event.target.value)}
              width="100%"
              flex={0.5}
              type="number"
            />
            <Select
              onChange={(event) => setUnit(event.currentTarget.value as Product["unit"])}
              options={[
                {
                  label: "KG",
                  value: "KG",
                },
                {
                  label: "UN",
                  value: "UN",
                },
              ]}
            />
          </FlexContainer>
        </FlexContainer>
        <FlexContainer width={{ small: "100%" }}>
          <Button onClick={handleAddItem} text="Add" icon size="100%" />
        </FlexContainer>
        <FlexContainer gap={{ small: "4px" }} width={{ small: "100%" }}>
          <TextInput
            placeholder="Search item"
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
            width="100%"
            flex={1}
          />
          <Button onClick={handleSearch} text="&#10005;" icon={false} variant="danger" size="73px" />
          <Button
            onClick={() => {
              setSearchText("");
              handleSearch();
            }}
            text="&#9906;"
            icon={false}
            size="73px"
          />
        </FlexContainer>
        <FlexContainer>
          <Button text="Uncheck all" onClick={handleUncheckAll} variant="danger" size="auto" />
        </FlexContainer>
      </FlexContainer>
    </FlexContainer>
  );
}
