import { ProductsContext } from "./productsContext";
import useList from "../../hooks/useList";

export default function ProductsContextProvider({ children }: { children: React.ReactNode }) {
  const list = useList();

  return <ProductsContext.Provider value={list}>{children}</ProductsContext.Provider>;
}
