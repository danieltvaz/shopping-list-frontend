import { ProductsContextValue } from "./types";
import { createContext } from "react";

export const ProductsContext = createContext<ProductsContextValue>({} as ProductsContextValue);
