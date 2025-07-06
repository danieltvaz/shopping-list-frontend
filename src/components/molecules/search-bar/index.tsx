import "./styles.css";

import { useCallback, useContext, useReducer } from "react";

import Button from "../../atoms/button";
import FlexContainer from "../../atoms/flex-container";
import { Product } from "../../../types/product";
import { ProductsContext } from "../../../contexts/products/productsContext";
import Select from "../../atoms/select";
import TextInput from "../../atoms/text-input";

type InitialValue = {
  name: string;
  price: string;
  searchText: string;
  quantity: number;
  unit: Product["unit"];
};

type Actions =
  | "SET_NAME"
  | "SET_PRICE"
  | "SET_SEARCH_TEXT"
  | "SET_QUANTITY"
  | "SET_UNIT"
  | "CLEAR_SEARCH"
  | "RESET_ADD"
  | "RESET_ALL";

const INITIAL_VALUE: InitialValue = {
  name: "",
  price: "",
  searchText: "",
  quantity: 0,
  unit: "KG",
};

type Action<T extends Actions = Actions> = T extends "SET_NAME"
  ? { type: "SET_NAME"; payload: InitialValue["name"] }
  : T extends "SET_PRICE"
  ? { type: "SET_PRICE"; payload: InitialValue["price"] }
  : T extends "SET_SEARCH_TEXT"
  ? { type: "SET_SEARCH_TEXT"; payload: InitialValue["searchText"] }
  : T extends "SET_QUANTITY"
  ? { type: "SET_QUANTITY"; payload: InitialValue["quantity"] }
  : T extends "SET_UNIT"
  ? { type: "SET_UNIT"; payload: InitialValue["unit"] }
  : T extends "CLEAR_SEARCH"
  ? { type: "CLEAR_SEARCH" }
  : T extends "RESET_ADD"
  ? { type: "RESET_ADD" }
  : T extends "RESET_ALL"
  ? { type: "RESET_ALL" }
  : never;

const reducer = (state: InitialValue, action: Action) => {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_PRICE":
      return { ...state, price: action.payload };
    case "SET_SEARCH_TEXT":
      return { ...state, searchText: action.payload };
    case "SET_QUANTITY":
      return { ...state, quantity: action.payload };
    case "SET_UNIT":
      return { ...state, unit: action.payload };
    case "CLEAR_SEARCH":
      return { ...state, searchText: "" };
    case "RESET_ADD":
      return { ...INITIAL_VALUE, searchText: state.searchText };
    case "RESET_ALL":
      return INITIAL_VALUE;
    default:
      return INITIAL_VALUE;
  }
};

export default function SearchBar() {
  const { addItem, uncheckAll, getItems, checkAll } = useContext(ProductsContext);
  const [{ name, price, quantity, searchText, unit }, dispatch] = useReducer(reducer, INITIAL_VALUE);

  const handleAddItem = useCallback(async () => {
    await addItem({
      productName: name,
      price: price,
      checked: false,
      quantity: quantity || 1,
      unit,
    });

    dispatch({ type: "RESET_ADD" });
  }, [addItem, name, price, quantity, unit]);

  const handleSearch = useCallback(() => {
    getItems(searchText);
  }, [searchText, getItems]);

  const handleClearSearch = () => {
    dispatch({ type: "CLEAR_SEARCH" });
    getItems("");
  };

  function handleUncheckAll() {
    uncheckAll();
  }

  function handleCheckAll() {
    checkAll();
  }

  return (
    <FlexContainer width={{ small: "100vw" }}>
      <FlexContainer flexDirection={{ small: "column" }} gap={{ small: "12px" }} flexGrow={{ small: 1 }}>
        <FlexContainer flexDirection={{ small: "column" }} gap={{ small: "8px" }} width={{ small: "100%" }}>
          <TextInput
            placeholder="New item"
            value={name}
            onChange={(event) => dispatch({ type: "SET_NAME", payload: event.target.value })}
            width="100%"
            flex={1}
          />
          <FlexContainer width={{ small: "100%" }} gap={{ small: "8px" }}>
            <TextInput
              placeholder="Price"
              value={price}
              onChange={(event) => dispatch({ type: "SET_PRICE", payload: event.target.value })}
              width="100%"
              flex={1}
              type="number"
            />
            <TextInput
              placeholder="Quantity"
              value={quantity}
              onChange={(event) => dispatch({ type: "SET_QUANTITY", payload: Number(event.target.value || 0) })}
              width="100%"
              flex={0.5}
              type="number"
            />
            <Select
              onChange={(event) => dispatch({ type: "SET_UNIT", payload: event.target.value as Product["unit"] })}
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
            onChange={(event) => dispatch({ type: "SET_SEARCH_TEXT", payload: event.target.value })}
            width="100%"
            flex={1}
          />
          <Button onClick={handleClearSearch} text="&#10005;" icon={false} variant="danger" size="73px" />
          <Button onClick={handleSearch} text="&#9906;" icon={false} size="73px" />
        </FlexContainer>
        <FlexContainer gap={{ small: "8px" }}>
          <Button text="Uncheck all" onClick={handleUncheckAll} variant="danger" size="auto" />
          <Button text="Check all" onClick={handleCheckAll} variant="danger" size="auto" />
        </FlexContainer>
      </FlexContainer>
    </FlexContainer>
  );
}
