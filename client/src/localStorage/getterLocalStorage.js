const getterLocalStorage = () => {
  const setItem = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };
  const getItem = (key) => {
    const item = localStorage.getItem(key);
    return JSON.parse(item);
  };
  return { setItem, getItem };
};

export default getterLocalStorage;
