import { useState, useEffect } from "react";

const useLocalStorageState = (keyName, initialValue) => {
  const getInitialValue = () => {
    const localStorageValue = localStorage.getItem(keyName);

    if (localStorageValue === null) {
      return initialValue;
    }

    return JSON.parse(localStorage.getItem(keyName));
  };

  const [state, setState] = useState(getInitialValue);

  useEffect(() => {
    localStorage.setItem(keyName, JSON.stringify(state));
  }, [keyName, state]);

  return [state, setState];
};

export default useLocalStorageState;
