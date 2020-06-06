import { useState, useEffect } from "react";

export default function usePersistedState(key, valueDefault) {
  const [state, updateState] = useState(() => {
    const valueLocalStorage = JSON.parse(localStorage.getItem(key));
    if (valueLocalStorage !== null) {
      return valueLocalStorage;
    } else {
      return valueDefault;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, updateState];
}
