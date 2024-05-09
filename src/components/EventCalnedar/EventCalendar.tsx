import { Calendar } from "antd";
import { WrapperCalendar } from "./styled";
import { FC } from "react";
import { IEvent } from "../../models/IEvent";
import { Moment } from "moment";
import { formatDate } from "../../utils/date";

interface EventCalendarProps {
  events: IEvent[];
}

const EventCalnedar: FC<EventCalendarProps> = ({ events }) => {
  const cellRender = (value: Moment) => {
    const formatedDate = formatDate(value.toDate());
    const currentDayEvents = events.filter(
      (event) => event.date === formatedDate
    );
    return (
      <div>
        {currentDayEvents.map((event, index) => (
          <span key={index}>{event.description}</span>
        ))}
      </div>
    );
  };
  return (
    <WrapperCalendar>
      <Calendar dateCellRender={cellRender} />
    </WrapperCalendar>
  );
};

export default EventCalnedar;
