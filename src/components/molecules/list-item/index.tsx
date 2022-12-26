import "./styles.css";

import { ChangeEvent, useEffect, useRef, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Item } from "../../../types/item";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

type ListItemProps = {
  item: Item;
  removeItem: (params?: any) => any;
  updateItem: (params?: any) => any;
};

export default function ListItem({ item, removeItem, updateItem }: ListItemProps) {
  const [isEdit, setIsEdit] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleDone(event: ChangeEvent<HTMLInputElement>) {
    const newItem = { ...item, done: event.target.checked };
    updateItem({ ...newItem });
  }

  function handleDescription(event: ChangeEvent<HTMLInputElement>) {
    const newItem = { ...item, description: event.target.value };
    updateItem({ ...newItem });
  }

  function handleEdit() {
    if (!item.description) return;

    setIsEdit((prev) => !prev);

    if (isEdit) return;

    setTimeout(() => inputRef.current!.focus(), 100);
  }

  return (
    <li className="listitem__wrapper">
      <div className="listitem__description__wrapper">
        <input type="checkbox" id={item.id.toString()} onChange={handleDone} />
        <label htmlFor={item.id.toString()}>
          <input
            value={item.description}
            onChange={handleDescription}
            className={item.done ? "listitem__description-input--done listitem__description-input" : "listitem__description-input"}
            disabled={!isEdit}
            ref={inputRef}
          />
        </label>
      </div>
      <div className="listitem__buttons__wrapper">
        <button onClick={handleEdit} className="listitem__editbutton">
          {isEdit ? "Salvar" : "Editar"}
        </button>
        <button onClick={() => removeItem(item)} className="listitem__removebutton">
          <FontAwesomeIcon icon={faTrashCan} />
        </button>
      </div>
    </li>
  );
}
