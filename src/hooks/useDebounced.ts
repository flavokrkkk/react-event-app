import { useCallback, useRef } from "react";

export const useDebounced = (callback: any, delay: number) => {
  const timer = useRef<number>();

  const debouncedCallback = useCallback(
    (...args: string[]) => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
      timer.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay]
  );

  return debouncedCallback;
};
