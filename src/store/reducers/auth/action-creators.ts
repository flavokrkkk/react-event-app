import { AppDispatch } from "../..";
import { authSlice } from "./authSlice";
import { IUser } from "../../../models/IUser";
import { UserService } from "../../../api/UserService";
import { MoodActionCreators } from "../mood/action-creators";

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
          const response = await UserService.getUsers();
          const mockUser = response.data.find(
            (user) => user.username === username && user.password === password
          );

          if (mockUser) {
            localStorage.setItem("auth", "true");
            localStorage.setItem("username", mockUser.username);
            dispatch(AuthActionCreators.setUser(mockUser));
            dispatch(AuthActionCreators.setIsAuth(true));
          } else {
            dispatch(
              AuthActionCreators.setIsError(
                "Пользователь не найден! Попробуйте еще раз!"
              )
            );
          }
        }, 1000);
      } catch (err) {
        dispatch(AuthActionCreators.setIsError(`Error with type ${err}`));
      }
    },

  logout: () => async (dispatch: AppDispatch) => {
    localStorage.removeItem("auth");
    localStorage.removeItem("username");
    localStorage.removeItem("mood");
    dispatch(MoodActionCreators.toggleColor("black"));
    dispatch(AuthActionCreators.setUser({} as IUser));
    dispatch(AuthActionCreators.setIsAuth(false));
  },
};
