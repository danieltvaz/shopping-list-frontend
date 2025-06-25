import { useCallback, useEffect, useState } from "react";

type ResponseSizes = "small" | "medium" | "large";

export type ResponsiveValue<T> = {
  [key in ResponseSizes]?: T;
};

export const getResponsiveValue = <T>(
  responsiveValue: ResponsiveValue<T> | undefined,
  breakpoint: ResponseSizes,
  defaultValue: T
): T => {
  if (!responsiveValue) return defaultValue;

  if (typeof responsiveValue === "object") {
    const value = responsiveValue[breakpoint];

    if (value === undefined) {
      const orderedBreakpoints: ResponseSizes[] = ["small", "medium", "large"];

      for (let i = orderedBreakpoints.length - 1; i >= 0; i--) {
        const largerBreakpoint = orderedBreakpoints[i];
        if (responsiveValue[largerBreakpoint] !== undefined) {
          return responsiveValue[largerBreakpoint]!;
        }
      }
    }

    return value ?? defaultValue;
  }

  return responsiveValue;
};

export default function useResponsive() {
  const [breakpoint, setBreakpoint] = useState("large");

  const handleResize = useCallback(() => {
    const width = window.innerWidth;
    if (width < 420) setBreakpoint("small");
    else if (width < 1024) setBreakpoint("medium");
    else setBreakpoint("large");
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return breakpoint as ResponseSizes;
}
