import "./styles.css";

import { ReactNode } from "react";

type TodoListProps = {
  children: ReactNode;
};

export default function TodoList({ children }: TodoListProps) {
  return (
    <section className="todolist__wrapper">
      <header className="todolist__header__wrapper">
        <h2>Lista de compras</h2>
      </header>
      <ul className="todolist__list__wrapper">{children}</ul>
    </section>
  );
}
