import { useRef, useEffect } from "react";

export function useComponentProfile<T extends object>(
  componentName: string,
  props: T
) {
  const prevProps = useRef<T | null>(null);
  const renderCount = useRef(0);

  renderCount.current++;

  useEffect(() => {
    if (prevProps.current) {
      const changed = Object.keys(props).filter(
        (key) =>
          props[key as keyof typeof props] !==
          (prevProps.current as Record<string, T>)[key]
      );

      if (changed.length > 0) {
        console.log(
          `%c[${componentName}] re-rendered`,
          "color:#ff4d4f; font-weight:bold;",
          "Changed props:",
          changed
        );
      }
    }
    prevProps.current = props;
  });

  return renderCount.current;
}
