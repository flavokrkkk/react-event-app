import axios from "axios";
import { AppDispatch } from "../..";
import { eventSlice } from "./eventSlice";
import { IUser } from "../../../models/IUser";

export const EventActionCreators = {
  getAllGuests: eventSlice.actions.fetchAllGuests,
  setEvents: eventSlice.actions.setEvents,
  setIsError: eventSlice.actions.eventsIsError,

  fetchAllGuests: () => async (dispatch: AppDispatch) => {
    try {
      const response = await axios.get<IUser[]>("/users.json");
      dispatch(EventActionCreators.getAllGuests(response.data));
    } catch (err) {
      dispatch(
        EventActionCreators.setIsError(`Не удалось получить users${err}`)
      );
    }
  },
};
