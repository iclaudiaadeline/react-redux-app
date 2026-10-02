import { LOGIN, LOGOUT } from "../actions/authActions";

export interface AuthState {
  isAuthenticated: boolean;
  user: string;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: "Guest",
};

type AuthAction = {
  type: string;
  payload?: string;
};

export const authReducer = (
  state: AuthState = initialState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case LOGIN:
      return {
        isAuthenticated: true,
        user: action.payload || "User",
      };
    case LOGOUT:
      return {
        isAuthenticated: false,
        user: "Guest",
      };
    default:
      return state;
  }
};