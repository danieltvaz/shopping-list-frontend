import "./styles.css";

import useResponsive, { ResponsiveValue, getResponsiveValue } from "../../../hooks/useResponsive";

import { ComponentProps } from "react";

type FlexContainerProps = {
  flexDirection?: ResponsiveValue<"row" | "column" | "row-reverse" | "column-reverse">;
  justifyContent?: ResponsiveValue<
    "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly"
  >;
  alignItems?: ResponsiveValue<"flex-start" | "flex-end" | "center" | "stretch" | "baseline">;
  flexWrap?: ResponsiveValue<"nowrap" | "wrap" | "wrap-reverse">;
  flexGrow?: ResponsiveValue<number>;
  gap?: ResponsiveValue<string>;
  width?: ResponsiveValue<string>;
  height?: ResponsiveValue<string>;
  className?: string;
  backgroundColor?: string;
  padding?: ResponsiveValue<string>;
  borderRadius?: ResponsiveValue<string>;
  visible?: ResponsiveValue<boolean>;
} & ComponentProps<"div">;

export default function FlexContainer({ children, ...props }: FlexContainerProps) {
  const breakpoint = useResponsive();

  const style = {
    display: "flex",
    flexDirection: getResponsiveValue(props.flexDirection, breakpoint, "row"),
    justifyContent: getResponsiveValue(props.justifyContent, breakpoint, "flex-start"),
    alignItems: getResponsiveValue(props.alignItems, breakpoint, "flex-start"),
    flexWrap: getResponsiveValue(props.flexWrap, breakpoint, "nowrap"),
    gap: getResponsiveValue(props.gap, breakpoint, "0"),
    width: getResponsiveValue(props.width, breakpoint, "100%"),
    height: getResponsiveValue(props.height, breakpoint, "auto"),
    flexGrow: getResponsiveValue(props.flexGrow, breakpoint, 0),
    padding: getResponsiveValue(props.padding, breakpoint, "0px"),
    borderRadius: getResponsiveValue(props.borderRadius, breakpoint, "0px"),
    visible: getResponsiveValue(props.visible, breakpoint, true) ? "visible" : "hidden",
    backgroundColor: props.backgroundColor || "transparent",
    ...props.style,
  };

  if (style.visible === "hidden") {
    return <></>;
  }

  return (
    <div className={`flex-container__wrapper`} style={style}>
      {children}
    </div>
  );
}
