import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AuthState } from "./types";
import { IUser } from "../../../models/IUser";

const initialState = <AuthState>{
  isAuth: false,
  user: {} as IUser,
  isLoading: false,
  isError: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    toggleStateIsAuth(state, { payload }: PayloadAction<boolean>) {
      state.isAuth = payload;
      state.isLoading = false;
    },
    fetchUserIsLoading(state, { payload }: PayloadAction<boolean>) {
      state.isLoading = payload;
    },
    fetchUserSuccess(state, { payload }: PayloadAction<IUser>) {
      state.user = payload;
      state.isLoading = false;
    },
    fetchUserError(state, { payload }: PayloadAction<string>) {
      state.isError = payload;
      state.isLoading = false;
    },
  },
});

export default authSlice.reducer;
