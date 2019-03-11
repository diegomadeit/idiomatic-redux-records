export const loadLocalState = () => {
  try {
    const serializedState = sessionStorage.getItem("serializedState");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveLocalState = state => {
  try {
    const serializedState = JSON.stringify(state);
    sessionStorage.setItem("serializedState", serializedState);
  } catch (err) {
    // Ignore at the moment.
  }
};
