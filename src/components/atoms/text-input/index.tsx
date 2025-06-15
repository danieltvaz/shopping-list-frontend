import "./styles.css";

import { ComponentPropsWithRef } from "react";

type TextInputCustomProps = {
  icon?: boolean;
  width?: string;
  flex?: number;
} & ComponentPropsWithRef<"input">;

function TextInput({ icon = true, width, flex, ...props }: TextInputCustomProps) {
  return (
    <div className="textinput__wrapper" style={{ flex, width }}>
      <input className="textinput__input" style={{ width }} {...props} />
    </div>
  );
}

export default TextInput;
