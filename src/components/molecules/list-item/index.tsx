import "./styles.css";

import { ChangeEvent, useCallback, useState } from "react";

import Button from "../../atoms/button";
import CurrencyInput from "../../atoms/currency-input";
import FlexContainer from "../../atoms/flex-container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Product } from "../../../types/product";
import TextInput from "../../atoms/text-input";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

type ListItemProps = {
  item: Product;
  removeItem: (product: Product) => any;
  updateItem: (product: Product) => any;
};

export default function ListItem({ item, removeItem, updateItem }: ListItemProps) {
  const [isEdit, setIsEdit] = useState(false);
  const [valueInput, setValueInput] = useState(item.price);
  const [nameInput, setNameInput] = useState(item.productName);

  const handleCheck = useCallback(
    (event: ChangeEvent<HTMLInputElement>, currentItem: Product) => {
      const updatedItem = { ...currentItem, checked: event.target.checked };
      updateItem(updatedItem);
    },
    [updateItem]
  );

  const handleDelete = useCallback(
    (itemToBeDelete: typeof item) => {
      removeItem(itemToBeDelete);
    },
    [removeItem]
  );

  const handleEdit = useCallback(
    (itemToBeEdited: typeof item) => {
      if (!isEdit) {
        setIsEdit(true);
        return;
      }

      const updatedItem = {
        ...itemToBeEdited,
        productName: nameInput,
        price: valueInput,
        checked: itemToBeEdited.checked,
      };

      updateItem(updatedItem);

      setIsEdit(false);
    },
    [isEdit, nameInput, valueInput, updateItem]
  );

  return (
    <FlexContainer
      borderRadius={{ small: "4px", medium: "4px" }}
      padding={{ small: "16px", medium: "24px" }}
      gap={{ small: "8px", medium: "16px" }}
      flexDirection={{ small: "column", medium: "row" }}
      backgroundColor={item.checked ? "#f1f8ff" : "#fff7f7"}
      alignItems={{ small: "center", medium: "center" }}>
      <FlexContainer
        visible={{ small: false, medium: true }}
        width={{ small: "100%", medium: "auto" }}
        flexGrow={{ small: 1, medium: 1 }}
        flexDirection={{ small: "column", medium: "row" }}
        alignItems={{ small: "center", medium: "center" }}
        justifyContent={{ small: "center", medium: "flex-start" }}>
        <input
          type="checkbox"
          id={item.id}
          onChange={(event) => handleCheck(event, item)}
          checked={item.checked}
          style={{ width: "24px", height: "24px", padding: "0", margin: "0" }}
        />
      </FlexContainer>
      <FlexContainer
        flexDirection={{ small: "row", medium: "row" }}
        flexGrow={{ small: 5, medium: 5 }}
        gap={{ small: "8px", medium: "16px" }}
        width={{ small: "100%", medium: "100%" }}>
        <TextInput
          value={nameInput}
          onChange={(event) => setNameInput(event.currentTarget.value)}
          disabled={!isEdit}
          width="100%"
        />
        <CurrencyInput value={valueInput} setValue={setValueInput} disabled={!isEdit} width="100%" />
      </FlexContainer>
      <FlexContainer
        flexGrow={{ small: 1 }}
        flexDirection={{ small: "row" }}
        gap={{ small: "8px" }}
        justifyContent={{ small: "flex-start", medium: "flex-end" }}>
        <FlexContainer visible={{ small: true, medium: false }} flexGrow={{ small: 1 }}>
          <input
            type="checkbox"
            id={item.id}
            onChange={(event) => handleCheck(event, item)}
            checked={item.checked}
            style={{ width: "24px", height: "24px", padding: "0", margin: "0" }}
          />
        </FlexContainer>
        <FlexContainer flexGrow={{ small: 3, medium: 1 }} gap={{ small: "8px", medium: "16px" }}>
          <Button text={isEdit ? "Salvar" : "Editar"} onClick={() => handleEdit(item)}></Button>
          <Button size="48px" variant="danger" onClick={() => handleDelete(item)}>
            <FontAwesomeIcon icon={faTrashCan} />
          </Button>
        </FlexContainer>
      </FlexContainer>
    </FlexContainer>
  );
}
