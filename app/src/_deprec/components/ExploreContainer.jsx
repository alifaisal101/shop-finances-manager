import { useState } from 'react';

import { loginReq } from '../store/users/users.req';

import './ExploreContainer.css';
import { useRecoilState } from 'recoil';
import { userState } from '../store/users/users.store';

const ExploreContainer = ({ name }) => {
  const [userLoginBody, setUserLoginBody] = useState({
    phoneNumber: '0',
    password: '',
  });

  const [user, setUser] = useRecoilState(userState);
  const phoneNumberChangeHandler = (e) => {
    const phoneNumber = e.target.value.trim().replace(/\D/g, '');
    if (
      (phoneNumber[0] != '0' && phoneNumber.length > 0) ||
      phoneNumber.length > 15
    ) {
      return;
    }

    setUserLoginBody((_userLoginBody) => {
      return {
        ..._userLoginBody,
        phoneNumber: phoneNumber || '0',
      };
    });
  };

  const passwordChangeHandler = (e) => {
    const password = e.target.value;

    setUserLoginBody((_userLoginBody) => {
      return {
        ..._userLoginBody,
        password,
      };
    });
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const userResult = await loginReq(userLoginBody);
      setUser(userResult);
      console.log(userResult);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div id="container">
      <strong>{name}</strong>
      <p>
        Explore{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://ionicframework.com/docs/components"
        >
          UI Components
        </a>
      </p>
      <h1>Hello!! {user.fullName}</h1>

      {user?._id ? (
        <h1>Hello!! {user.fullName}</h1>
      ) : (
        <form action="" method="post">
          <input
            type="text"
            name="phoneNumber"
            onChange={phoneNumberChangeHandler}
            value={userLoginBody.phoneNumber}
          />

          <input
            type="password"
            name="password"
            onChange={passwordChangeHandler}
            value={userLoginBody.password}
          />

          <button onClick={loginHandler}>Login</button>
        </form>
      )}
    </div>
  );
};

export default ExploreContainer;
