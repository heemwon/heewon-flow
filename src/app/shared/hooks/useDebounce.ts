import { useState, useEffect } from "react";

interface Params<T> {
  value: T;
  delay: number;
}
function useDebounce<T>({ value, delay }: Params<T>) {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;
