import { Button, Card } from "antd";
import { IEvent } from "../../models/IEvent";
import { FC } from "react";
import {
  ContainerProfileCard,
  Hr,
  ProfileCardHeader,
  WrapperProfileCard,
} from "./styled";
import { useActions } from "../../hooks/useActions";

interface ProfileCardProps {
  event: IEvent;
}

const ProfileCard: FC<ProfileCardProps> = ({ event }) => {
  const { deleteEvent } = useActions();

  const handleDeleteEvent = () => {
    deleteEvent(event.date);
  };

  return (
    <WrapperProfileCard>
      <Card>
        <ProfileCardHeader>
          <h2> {`Author: ${event.author}`}</h2>
          <Button onClick={handleDeleteEvent}>Delete</Button>
        </ProfileCardHeader>
        <Hr />
        <ContainerProfileCard>
          <h3>{`Event: ${event.description}`}</h3>
          <div>{`Date: ${event.date}`}</div>
          <div>{`Performs: ${
            event.guest ? event.guest : "Вы не назначлии гостя события!"
          }`}</div>
        </ContainerProfileCard>
      </Card>
    </WrapperProfileCard>
  );
};

export default ProfileCard;
