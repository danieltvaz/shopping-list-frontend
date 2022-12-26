import "./styles.css";

import { ButtonHTMLAttributes, ComponentProps, HTMLProps } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";

type AddButtonProps = ComponentProps<"button">;

export default function AddButton(props: AddButtonProps) {
  return (
    <button className="addbutton__button" {...props}>
      <FontAwesomeIcon icon={faSquarePlus} color="#fff" />
      Adicionar
    </button>
  );
}
