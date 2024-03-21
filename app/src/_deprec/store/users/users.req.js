export const loginReq = async (userLoginBody) => {
  try {
    const res = await fetch(`http://localhost:3000/users/login`, {
      body: JSON.stringify(userLoginBody),
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const resBody = await res.json();
    console.log(resBody);
    return resBody;
  } catch (err) {
    console.log(err);
  }
};
