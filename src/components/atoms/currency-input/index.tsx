import "./styles.css";

import { ComponentProps } from "react";

type Props = {
  setValue: React.Dispatch<React.SetStateAction<string>>;
} & ComponentProps<"input">;

export default function CurrencyInput({ setValue, ...props }: Props) {
  return (
    <div className="input__wrapper">
      <input
        className="input__input_element"
        value={props.value}
        type="number"
        onChange={(e) => setValue(e.target.value)}
        {...props}
      />
    </div>
  );
}
