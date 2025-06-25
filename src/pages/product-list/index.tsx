import React, { useContext } from "react";

import Costs from "../../components/molecules/costs";
import FlexContainer from "../../components/atoms/flex-container";
import Header from "../../components/molecules/header";
import ListItem from "../../components/molecules/list-item";
import LoadingOverlay from "../../components/atoms/loading-overlay";
import { ProductsContext } from "../../contexts/products/productsContext";
import SearchBar from "../../components/molecules/search-bar";
import Spacer from "../../components/atoms/spacer";
import TodoList from "../../components/molecules/todo-list";

export default function ProductListPage() {
  const { items, loading } = useContext(ProductsContext);

  return (
    <FlexContainer
      as="main"
      flexDirection={{ small: "column" }}
      padding={{ small: "12px" }}
      height={{ small: "100vh" }}
      width={{ small: "100%", medium: "640px" }}
      alignItems={{ small: "center", medium: "center" }}
      margin={{ small: "auto" }}>
      <LoadingOverlay active={loading} />
      <Header />
      <Spacer orientation="vertical" size="12px" />
      <SearchBar />
      <Spacer orientation="vertical" size="12px" />
      <Costs />
      <Spacer orientation="vertical" size="12px" />
      <TodoList>
        {items?.map((item) => (
          <React.Fragment key={item.id}>
            <ListItem item={item} key={item.id} />
            <Spacer orientation="vertical" size="16px" />
          </React.Fragment>
        ))}
      </TodoList>
    </FlexContainer>
  );
}
