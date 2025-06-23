import React, { useContext } from "react";

import Costs from "../../components/molecules/costs";
import Header from "../../components/molecules/header";
import ListItem from "../../components/molecules/list-item";
import LoadingOverlay from "../../components/atoms/loading-overlay";
import MainContainer from "../../components/layout/main-container";
import { ProductsContext } from "../../contexts/products/productsContext";
import SearchBar from "../../components/molecules/search-bar";
import Spacer from "../../components/atoms/spacer";
import TodoList from "../../components/molecules/todo-list";

export default function ProductListPage() {
  const { items, loading } = useContext(ProductsContext);

  return (
    <MainContainer>
      <LoadingOverlay active={loading} />
      <Header />
      <SearchBar />
      <Costs />
      <TodoList>
        {items?.map((item) => (
          <React.Fragment key={item.id}>
            <ListItem item={item} key={item.id} />
            <Spacer orientation="vertical" size="16px" />
          </React.Fragment>
        ))}
      </TodoList>
    </MainContainer>
  );
}
