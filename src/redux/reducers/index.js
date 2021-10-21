const SET_INPUTLOGIN = 'SET_INPUTLOGIN';
const SET_INPUTPASSWORD = 'SET_INPUTPASSWORD';
const SET_USERNAME = 'SET_USERNAME';

const initialState = {
  login: 'developer21',
  password: '123456',
  inputLogin: '',
  inputPassword: '',
  userName: null,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_INPUTLOGIN:
      return { ...state, inputLogin: payload };
    case SET_INPUTPASSWORD:
      return { ...state, inputPassword: payload };
    case SET_USERNAME:
      return { ...state, userName: payload };

    default:
      return state;
  }
};

export const setLogin = (login) => {
  return { type: SET_INPUTLOGIN, payload: login };
};
export const setPassword = (password) => {
  return { type: SET_INPUTPASSWORD, payload: password };
};
export const setUserName = (userName) => {
  return { type: SET_USERNAME, payload: userName };
};

export default reducer;
