import FlexContainer from "../../atoms/flex-container";
import { ProductsContext } from "../../../contexts/products/productsContext";
import { formatMoney } from "../../../utils";
import { useContext } from "react";

export default function Costs() {
  const { totalSum, checkedSum } = useContext(ProductsContext);

  return (
    <FlexContainer flexDirection={{ small: "column" }} gap={{ small: "8px" }}>
      <FlexContainer>
        <h2 style={{ fontWeight: "bold" }}>Shopping List</h2>
      </FlexContainer>
      <FlexContainer>
        <span>Total cost: {formatMoney(totalSum?.toString())}</span>
      </FlexContainer>
      <FlexContainer>
        <span>Checked cost: {formatMoney(checkedSum?.toString())}</span>
      </FlexContainer>
    </FlexContainer>
  );
}
