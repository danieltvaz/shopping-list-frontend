import { AddProductParams, RemoveProductParams, UpdateProductParams } from "../types/requests";
import { useCallback, useEffect, useState } from "react";

import { Product } from "../types/product";
import axiosInstance from "../services/axios";

export default function useList() {
  const [items, setItems] = useState([] as Product[]);
  const [loading, setLoading] = useState(false);
  const [totalSum, setTotalSum] = useState(0);
  const [checkedSum, setCheckedSum] = useState(0);

  const calculateTotalSum = useCallback(() => {
    return items.reduce((acc, item) => acc + Number(item.price), 0);
  }, [items]);

  const calculateTotalCheckedValues = useCallback(() => {
    return items.reduce((acc, item) => {
      if (item.checked) {
        return acc + Number(item.price);
      }
      return acc;
    }, 0);
  }, [items]);

  async function updateItem(item: Product) {
    setLoading(true);

    try {
      await axiosInstance.put("/list/products", {
        product: {
          ...item,
        },
      } as UpdateProductParams);
      await getItems();
    } catch {
      alert("Error while updating item");
    } finally {
      setLoading(false);
    }
  }

  async function addItem(item: Omit<Product, "id">) {
    setLoading(true);

    try {
      await axiosInstance.post("/list/products", {
        ...item,
      } as AddProductParams);
      await getItems();
    } catch {
      alert("Error while adding item");
    } finally {
      setLoading(false);
    }
  }

  async function removeItem(item: Product) {
    setLoading(true);

    try {
      await axiosInstance.delete("/list/products", {
        params: {
          productId: item.id,
        },
      } as RemoveProductParams);
      await getItems();
    } catch {
      alert("Error while removing item");
    } finally {
      setLoading(false);
    }
  }

  async function getItems(searchText?: string) {
    setLoading(true);

    try {
      const request = await axiosInstance.get("/list/products", {
        params: {
          search: searchText,
        },
      });
      setItems(request.data.data);
    } catch {
      alert("Error while getting items");
    } finally {
      setLoading(false);
    }
  }

  async function uncheckAll() {
    setLoading(true);

    try {
      await axiosInstance.put("/list/products/uncheckAll", {});
      await getItems();
    } catch {
      alert("Error while unchecking all items");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getItems();
  }, []);

  useEffect(() => {
    setTotalSum(calculateTotalSum());
    setCheckedSum(calculateTotalCheckedValues());
  }, [items]);

  return { updateItem, addItem, removeItem, items, loading, getItems, uncheckAll, totalSum, checkedSum };
}
