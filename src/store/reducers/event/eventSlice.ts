import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { EventState } from "./types";
import { IUser } from "../../../models/IUser";
import { IEvent } from "../../../models/IEvent";

export const initialState = <EventState>{
  guests: [],
  events: [],
  isError: "",
};

export const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    fetchAllGuests(state, { payload }: PayloadAction<IUser[]>) {
      state.guests = payload;
    },
    setEvents(state, { payload }: PayloadAction<IEvent[]>) {
      state.events = payload;
    },
    eventsIsError(state, { payload }: PayloadAction<string>) {
      state.isError = payload;
    },
  },
});

export default eventSlice.reducer;
