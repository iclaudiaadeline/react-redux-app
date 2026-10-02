export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export const login = (userName = "User") => ({
  type: LOGIN,
  payload: userName,
});

export const logout = () => ({ type: LOGOUT });