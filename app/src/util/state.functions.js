export const controlInput = (event, key, setStateFunction) => {
  setStateFunction((_state) => {
    const newState = { ..._state };
    newState[key] = event.target.value;
    return newState;
  });
};
