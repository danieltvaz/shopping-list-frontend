import "./styles.css";

import { ReactNode } from "react";

type MainContainerProps = {
  children: ReactNode;
};

export default function MainContainer({ children }: MainContainerProps) {
  return <main className="maincontainer__wrapper">{children}</main>;
}
