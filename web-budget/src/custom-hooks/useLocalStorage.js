import { useState, useEffect } from "react";

const useLocalStorage = ( key, defaultSelection ) => {
  const [ selection, setSelection ] = useState(() => {
    let currentSelection;

    try {
      currentSelection = JSON.parse(
        localStorage.getItem(key) || defaultSelection
      );
    } catch (error) {
      currentSelection = defaultSelection;
    }

    return currentSelection;
  });


  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(selection));
  }, [selection, key]);


  return [selection, setSelection]
}

export { useLocalStorage }