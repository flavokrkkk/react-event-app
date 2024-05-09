import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { MoodState } from "./types";

const initialState = <MoodState>{
  moodColor: "black",
};

export const moodSlice = createSlice({
  name: "mood",
  initialState,
  reducers: {
    toggleMoodColor(state, { payload }: PayloadAction<string>) {
      state.moodColor = payload;
      localStorage.setItem("mood", state.moodColor);
    },
  },
});

export default moodSlice.reducer;
