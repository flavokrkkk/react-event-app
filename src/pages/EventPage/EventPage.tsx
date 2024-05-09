import { FC, useEffect, useState } from "react";
import EventCalnedar from "../../components/EventCalnedar/EventCalendar";
import { Button, Layout, Modal } from "antd";
import { ButtonWrapper, Title } from "../../styles/global";
import EventForm from "../../components/EventForm/EventForm";
import { useActions } from "../../hooks/useActions";
import { useAppSelector } from "../../hooks/useAppSelector";
import { AuthSelectors, EventSelectors } from "../../store/selectors";
import { IEvent } from "../../models/IEvent";

const EventPage: FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const { guests, events } = useAppSelector(EventSelectors);
  const { user } = useAppSelector(AuthSelectors);

  const { fetchAllGuests, createEvent, fetchEvents } = useActions();

  const handleModalOpen = () => {
    setIsVisible(true);
  };

  const handleModalCancel = () => {
    setIsVisible(false);
  };

  const handleFormSubmit = (event: IEvent) => {
    setIsVisible(false);
    createEvent(event);
  };

  useEffect(() => {
    fetchAllGuests();
  }, []);

  useEffect(() => {
    fetchEvents(user.username);
  }, [events.length]);

  console.log(events);

  return (
    <Layout>
      <Title>Calendar-Event</Title>
      <ButtonWrapper>
        <Button block onClick={handleModalOpen}>
          Add Event
        </Button>
      </ButtonWrapper>
      <EventCalnedar events={events} />
      <Modal
        open={isVisible}
        title="Добавить событие"
        footer={null}
        onCancel={handleModalCancel}
      >
        <EventForm guests={guests} onSubmit={handleFormSubmit} />
      </Modal>
    </Layout>
  );
};

export default EventPage;
