import Header from "../../components/molecules/header";
import ListItem from "../../components/molecules/list-item";
import LoadingOverlay from "../../components/atoms/loading-overlay";
import MainContainer from "../../components/layout/main-container";
import React from "react";
import SearchBar from "../../components/molecules/search-bar";
import Spacer from "../../components/atoms/spacer";
import TodoList from "../../components/molecules/todo-list";
import useList from "../../hooks/useList";

export default function ProductListPage() {
  const { items, addItem, removeItem, updateItem, loading, getItems, uncheckAll, totalSum, checkedSum } = useList();

  return (
    <MainContainer>
      <LoadingOverlay active={loading} />
      <Header />
      <SearchBar addItem={addItem} searchItem={getItems} uncheckAll={uncheckAll} />
      <TodoList totalSum={totalSum} checkedSum={checkedSum}>
        {items?.map((item) => (
          <React.Fragment key={item.id}>
            <ListItem item={item} key={item.id} removeItem={removeItem} updateItem={updateItem} />
            <Spacer orientation="vertical" size="16px" />
          </React.Fragment>
        ))}
      </TodoList>
    </MainContainer>
  );
}
