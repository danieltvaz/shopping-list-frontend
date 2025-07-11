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
  as?: keyof HTMLElementTagNameMap;
  border?: string;
  margin?: ResponsiveValue<string>;
} & ComponentProps<"div">;

export default function FlexContainer({ children, ...props }: FlexContainerProps) {
  const breakpoint = useResponsive();

  const Component = props.as || "div";

  const style = {
    display: "flex",
    flexDirection: getResponsiveValue(props.flexDirection, breakpoint, "row"),
    justifyContent: getResponsiveValue(props.justifyContent, breakpoint, "flex-start"),
    alignItems: getResponsiveValue(props.alignItems, breakpoint, "flex-start"),
    flexWrap: getResponsiveValue(props.flexWrap, breakpoint, "nowrap"),
    gap: getResponsiveValue(props.gap, breakpoint, "0"),
    width: getResponsiveValue(props.width, breakpoint, "auto"),
    height: getResponsiveValue(props.height, breakpoint, "auto"),
    flexGrow: getResponsiveValue(props.flexGrow, breakpoint, 0),
    padding: getResponsiveValue(props.padding, breakpoint, "0px"),
    borderRadius: getResponsiveValue(props.borderRadius, breakpoint, "0px"),
    visible: getResponsiveValue(props.visible, breakpoint, true) ? "visible" : "hidden",
    margin: getResponsiveValue(props.margin, breakpoint, "0px"),
    backgroundColor: props.backgroundColor || "transparent",
    border: props.border || "none",
    ...props.style,
  };

  if (style.visible === "hidden") {
    return <></>;
  }

  return (
    <Component className={`flex-container__wrapper`} style={style}>
      {children}
    </Component>
  );
}
