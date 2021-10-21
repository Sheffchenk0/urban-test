import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Input from '../components/Input';
import { setLogin, setPassword, setUserName } from '../redux/reducers';

const Home = () => {
  const dispatch = useDispatch();
  const login = useSelector((state) => state.login);
  const password = useSelector((state) => state.password);
  const inputLogin = useSelector((state) => state.inputLogin);
  const inputPassword = useSelector((state) => state.inputPassword);
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (login === inputLogin && password === inputPassword) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [login, inputLogin, password, inputPassword]);

  const onLoginChange = (event) => {
    dispatch(setLogin(event.target.value));
  };
  const onPasswordChange = (event) => {
    dispatch(setPassword(event.target.value));
  };
  const onSubmit = () => {
    if (!isDisabled) {
      dispatch(setUserName(inputLogin));
    }
  };
  return (
    <div className="block">
      <Input onChange={onLoginChange} id={1} title="Login" value={inputLogin} />
      <Input onChange={onPasswordChange} id={2} title="Password" login={login} />
      <Link to="/profile">
        <button
          disabled={isDisabled}
          onClick={onSubmit}
          type="submit"
          className={classNames({ disabled: isDisabled })}>
          Войти
        </button>
      </Link>
    </div>
  );
};

export default Home;
