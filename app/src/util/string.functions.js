export const charsRemover = (charsToRemove, inputString) => {
  // Convert charsToRemove to a Set for O(1) average time complexity lookups
  const removalSet = new Set(charsToRemove);

  // Initialize an empty array to collect characters that are not to be removed
  const resultArray = [];

  // Iterate through each character in inputString
  for (let i = 0; i < inputString.length; i++) {
    const char = inputString[i];

    // Check if the character should be removed (not in removalSet)
    if (!removalSet.has(char)) {
      resultArray.push(char);
    }
  }

  // Join the array into a string and return
  return resultArray.join('');
};
