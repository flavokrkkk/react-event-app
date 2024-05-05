import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AuthState } from "./types";

const initialState = <AuthState>{
  isAuth: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    toggleStateIsAuth(state, { payload }: PayloadAction<boolean>) {
      state.isAuth = payload;
    },
  },
});

export default authSlice.reducer;
