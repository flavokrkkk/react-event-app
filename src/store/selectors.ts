import { RootState } from ".";

export const AuthSelectors = (state: RootState) => state.authReducer;

export const EventSelectors = (state: RootState) => state.eventReducer;

export const MoodSelectors = (state: RootState) => state.moodReducer;
