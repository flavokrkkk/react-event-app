import { FC, useEffect, useState } from "react";
import EventCalnedar from "../../components/EventCalnedar/EventCalendar";
import { Button, Layout, Modal } from "antd";
import { ButtonWrapper, Title } from "../../styles/global";
import EventForm from "../../components/EventForm/EventForm";
import { useActions } from "../../hooks/useActions";
import { useAppSelector } from "../../hooks/useAppSelector";
import { EventSelectors } from "../../store/selectors";

const EventPage: FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const { guests } = useAppSelector(EventSelectors);

  const { fetchAllGuests } = useActions();

  const handleModalOpen = () => {
    setIsVisible(true);
  };

  const handleModalCancel = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    fetchAllGuests();
  }, []);

  return (
    <Layout>
      <Title>Calendar-Event</Title>
      <ButtonWrapper>
        <Button onClick={handleModalOpen}>Add Event</Button>
      </ButtonWrapper>
      <EventCalnedar events={[]} />
      <Modal
        open={isVisible}
        title="Добавить событие"
        footer={null}
        onCancel={handleModalCancel}
      >
        <EventForm guests={guests} />
      </Modal>
    </Layout>
  );
};

export default EventPage;
