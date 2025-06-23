import "./styles.css";

import { ComponentProps } from "react";

type TextInputCustomProps = {
  width?: string;
  flex?: number;
} & ComponentProps<"input">;

function TextInput({ width, flex, ...props }: TextInputCustomProps) {
  return (
    <div className="textinput__wrapper" style={{ flex, width }}>
      <input className="textinput__input" style={{ width }} {...props} />
    </div>
  );
}

export default TextInput;
