// Fetches the token from the IPC (Electron process)
export const fetchToken = () => {
  e_auth.fetchToken((err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    // handle result
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
