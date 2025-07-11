import { useCallback, useContext, useState } from "react";

import Button from "../../atoms/button";
import FlexContainer from "../../atoms/flex-container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Product } from "../../../types/product";
import { ProductsContext } from "../../../contexts/products/productsContext";
import Select from "../../atoms/select";
import TextInput from "../../atoms/text-input";
import { UNITS } from "../../../constants/units";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { isObjectEqual } from "../../../utils";

type ListItemProps = {
  item: Product;
};

export default function ListItem({ item }: ListItemProps) {
  const [isEdit, setIsEdit] = useState(false);
  const [valueInput, setValueInput] = useState(item.price);
  const [nameInput, setNameInput] = useState(item.productName);
  const [quantity, setQuantity] = useState(item.quantity);
  const [unit, setUnit] = useState(item.unit);

  const { removeItem, updateItem } = useContext(ProductsContext);

  const handleCheck = useCallback(
    (currentItem: Product) => {
      const updatedItem = { ...currentItem, checked: !item.checked };
      updateItem(updatedItem);
    },
    [item.checked, updateItem]
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
        quantity: quantity,
        unit: unit,
      };

      if (!isObjectEqual(updatedItem, itemToBeEdited)) {
        updateItem(updatedItem);
      }

      setIsEdit(false);
    },
    [isEdit, nameInput, valueInput, quantity, unit, updateItem]
  );

  return (
    <FlexContainer
      backgroundColor={item.checked ? "#c2c2c2" : "#ffffff"}
      border={item.checked ? "none" : "1px solid #e0e0e0"}
      width={{ small: "100%" }}
      flexDirection={{ small: "column" }}
      gap={{ small: "8px" }}
      padding={{ small: "8px" }}
      borderRadius={{ small: "4px" }}>
      <FlexContainer width={{ small: "100%" }}>
        <TextInput
          disabled={!isEdit}
          value={nameInput}
          onChange={(event) => setNameInput(event.currentTarget.value)}
          width="100%"
          placeholder="Item name"
        />
      </FlexContainer>
      <FlexContainer gap={{ small: "8px" }} width={{ small: "100%" }} alignItems={{ small: "center" }}>
        <span>R$</span>
        <TextInput
          disabled={!isEdit}
          value={valueInput}
          onChange={(event) => setValueInput(event.currentTarget.value)}
          placeholder="Price"
          width="100%"
          type="number"
        />
        <span>x</span>

        <TextInput
          disabled={!isEdit}
          value={quantity}
          onChange={(event) => setQuantity(Number(event.currentTarget.value || 0))}
          placeholder="Quantity"
          width="100%"
          type="number"
        />
        <Select
          disabled={!isEdit}
          options={UNITS}
          value={unit}
          onChange={(event) => setUnit(event.target.value as Product["unit"])}
        />
      </FlexContainer>
      <FlexContainer gap={{ small: "4px" }}>
        <Button onClick={() => handleCheck(item)} text={item.checked ? "Uncheck" : "Check"} />
        <Button onClick={() => handleEdit(item)} text={isEdit ? "Save" : "Edit"} />
        <Button onClick={() => handleDelete(item)} variant="danger">
          <FontAwesomeIcon icon={faTrashCan} />
        </Button>
      </FlexContainer>
    </FlexContainer>
  );
}
