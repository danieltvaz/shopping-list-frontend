import "./styles.css";

import { ComponentProps } from "react";

type Props = {
  options: { label: string; value: HTMLOptionElement["value"] }[];
} & ComponentProps<"select">;

export default function Select({ options, ...props }: Props) {
  return (
    <select className="select__wrapper" {...props}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
