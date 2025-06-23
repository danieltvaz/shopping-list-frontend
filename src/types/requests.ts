import { Product } from "./product";

export type AddProductParams = Product;

export type GetListResponse = {
  statusMessage: string;
  data: Product[];
};

export type UpdateProductParams = Product;

export type RemoveProductParams = {
  params: {
    productId: string;
  };
};
