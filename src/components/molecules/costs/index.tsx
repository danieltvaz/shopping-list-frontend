import FlexContainer from "../../atoms/flex-container";
import { ProductsContext } from "../../../contexts/products/productsContext";
import { formatMoney } from "../../../utils";
import { useContext } from "react";

export default function Costs() {
  const { totalSum, checkedSum } = useContext(ProductsContext);

  return (
    <FlexContainer gap={{ small: "4px" }} width={{ small: "100vw" }} justifyContent={{ small: "space-between" }}>
      <FlexContainer>
        <span>Current: {formatMoney(checkedSum?.toString())}</span>
      </FlexContainer>
      <FlexContainer>
        <span>Total: {formatMoney(totalSum?.toString())}</span>
      </FlexContainer>
    </FlexContainer>
  );
}
