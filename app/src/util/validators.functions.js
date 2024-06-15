export const isUsernameValid = (username) => {
  // Regular expression to match allowed characters: alphanumeric and underscore
  // Modify this regex pattern based on your specific requirements
  const regex = /^[a-zA-Z0-9_]+$/;

  // Test the username against the regex pattern
  return regex.test(username);
};

export const isString = (input) => {
  return typeof input === 'string';
};
