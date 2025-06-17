import "./styles.css";

import FlexContainer from "../../atoms/flex-container";
import { ReactNode } from "react";
import { formatMoney } from "../../../utils";

type TodoListProps = {
  children: ReactNode;
  totalSum?: number;
  checkedSum?: number;
};

export default function TodoList({ children, totalSum, checkedSum }: TodoListProps) {
  return (
    <section className="todolist__wrapper">
      <FlexContainer
        flexDirection={{ small: "column" }}
        as="header"
        gap={{ small: "8px" }}
        height={{ small: "72px" }}
        alignItems={{ small: "flex-start" }}
        justifyContent={{ small: "center" }}
        padding={{ small: "16px 16px" }}>
        <h2 style={{ fontWeight: "bold" }}>Shopping List</h2>
        <span>Total cost: {formatMoney(totalSum?.toString())}</span>
        <span>Checked cost: {formatMoney(checkedSum?.toString())}</span>
      </FlexContainer>
      <ul className="todolist__list__wrapper">{children}</ul>
    </section>
  );
}
