import { useAppSelector } from "../../hooks/useAppSelector";
import { EventSelectors } from "../../store/selectors";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import { Title } from "../../styles/global";
import { WrapperProfile } from "./styled";
import { useActions } from "../../hooks/useActions";
import { Button } from "antd";

const ProfileEventPage = () => {
  const { events } = useAppSelector(EventSelectors);

  const { sortEvent } = useActions();

  const handleSortEvents = () => {
    sortEvent();
  };

  return (
    <WrapperProfile>
      <Title>Profile Events</Title>
      <Button onClick={handleSortEvents}>Sort</Button>
      <div>
        {events.map((event) => (
          <ProfileCard key={event.description} event={event} />
        ))}
      </div>
    </WrapperProfile>
  );
};

export default ProfileEventPage;
