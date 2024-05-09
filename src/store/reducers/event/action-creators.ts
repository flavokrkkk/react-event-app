import { AppDispatch } from "../..";
import { eventSlice } from "./eventSlice";
import { UserService } from "../../../api/UserService";
import { IEvent } from "../../../models/IEvent";

export const EventActionCreators = {
  getAllGuests: eventSlice.actions.fetchAllGuests,
  setEvents: eventSlice.actions.setEvents,
  setIsError: eventSlice.actions.eventsIsError,

  fetchAllGuests: () => async (dispatch: AppDispatch) => {
    try {
      const response = await UserService.getUsers();
      dispatch(EventActionCreators.getAllGuests(response.data));
    } catch (err) {
      dispatch(
        EventActionCreators.setIsError(`Не удалось получить users${err}`)
      );
    }
  },

  createEvent: (event: IEvent) => async (dispatch: AppDispatch) => {
    try {
      const events = localStorage.getItem("events") || "[]";

      const json = JSON.parse(events) as IEvent[];
      json.push(event);
      dispatch(EventActionCreators.setEvents(json));
      localStorage.setItem("events", JSON.stringify(json));
    } catch (err) {
      console.log(err);
    }
  },
  fetchEvents: (username: string) => (dispatch: AppDispatch) => {
    try {
      const events = localStorage.getItem("events") || "[]";

      const json = JSON.parse(events) as IEvent[];
      const currentEvent = json.filter(
        (el) => el.guest === username || el.author === username
      );
      dispatch(EventActionCreators.setEvents(currentEvent));
    } catch (err) {
      console.log(err);
    }
  },
};
