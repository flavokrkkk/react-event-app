import axios from "axios";
import { AppDispatch } from "../..";
import { authSlice } from "./authSlice";
import { IUser } from "../../../models/IUser";

export const AuthActionCreators = {
  setUser: authSlice.actions.fetchUserSuccess,
  setIsLoading: authSlice.actions.fetchUserIsLoading,
  setIsError: authSlice.actions.fetchUserError,
  setIsAuth: authSlice.actions.toggleStateIsAuth,

  login:
    (username: string, password: string) => async (dispatch: AppDispatch) => {
      try {
        dispatch(AuthActionCreators.setIsLoading(true));
        setTimeout(async () => {
          const response = await axios.get<IUser[]>("/users.json");
          const mockUser = response.data.find(
            (user) => user.username === username && user.password === password
          );

          if (mockUser) {
            localStorage.setItem("auth", "true");
            localStorage.setItem("username", mockUser.username);
            dispatch(AuthActionCreators.setIsAuth(true));
            dispatch(AuthActionCreators.setUser(mockUser));
          } else {
            dispatch(AuthActionCreators.setIsError("Пользователь не найден!"));
          }
        }, 1000);
      } catch (err) {
        console.log("1111");
        dispatch(AuthActionCreators.setIsError(`Error with type ${err}`));
      }
    },

  logout: () => async (dispatch: AppDispatch) => {
    localStorage.removeItem("auth");
    localStorage.removeItem("username");
    dispatch(AuthActionCreators.setUser({} as IUser));
    dispatch(AuthActionCreators.setIsAuth(false));
  },
};
