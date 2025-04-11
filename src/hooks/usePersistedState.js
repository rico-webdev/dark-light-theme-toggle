import { getItem } from "../utils/localStorage.js";
import { setItem } from "../utils/localStorage.js";
import { useState, useEffect } from "react";

export function usePersistedState(key, initialValue) {
  //     function usePersistedState<T>(key, initialValue: T ) {
  //     typescript generics to allow for any type of initial value: input => output
  const [state, setState] = useState(() => {
    const savedValue = getItem(key);
    return savedValue || initialValue;
    //return savedValue as T || initialValue;
  });

  useEffect(() => {
    setItem(key, state);
  }, [key, state]);

  return [state, setState]; // as const: fixed array of 2 elements
}
