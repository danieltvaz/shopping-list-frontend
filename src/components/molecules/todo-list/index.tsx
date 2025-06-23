import "./styles.css";

import React from "react";
import Spacer from "../../atoms/spacer";

export default function TodoList({ children }: { children: React.ReactNode }) {
  return (
    <section className="todolist__wrapper">
      <Spacer orientation="vertical" size="32px" />
      <ul className="todolist__list__wrapper">{children}</ul>
    </section>
  );
}
