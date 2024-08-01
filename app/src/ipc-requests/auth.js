// Fetches the token from the IPC (Electron process)
export const retrieveToken = () => {
  console.log('I Run TWICE');
  e_auth.retrieveToken((err, result) => {
    if (err) {
      console.log(err);
      return false;
    }

    if (!result) {
      // No token was found, token was invalid or expired.
      return false;
    }

    return token;
  });
};

// Sends the token over the IPC to be stored
export const storeToken = (token) => {
  e_auth.storeToken(token, (err, result) => {
    if (err) {
      console.log(err);
    }

    console.log('SUCCESS', token);
  });
};
