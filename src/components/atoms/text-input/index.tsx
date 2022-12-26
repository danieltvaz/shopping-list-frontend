import "./styles.css";

import { ComponentPropsWithRef, forwardRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTags } from "@fortawesome/free-solid-svg-icons";

const TextInput = forwardRef<HTMLInputElement, ComponentPropsWithRef<"input">>((props, ref) => {
  return (
    <div className="textinput__wrapper">
      <input className="textinput__input" ref={ref} {...props} />
      <div className="textinput__iconwrapper">
        <FontAwesomeIcon icon={faTags} />
      </div>
    </div>
  );
});

export default TextInput;
