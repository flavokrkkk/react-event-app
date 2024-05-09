import { useAppSelector } from "../../hooks/useAppSelector";
import { EventSelectors } from "../../store/selectors";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import { Title } from "../../styles/global";
import { WrapperProfile } from "./styled";

const ProfileEventPage = () => {
  const { events } = useAppSelector(EventSelectors);

  return (
    <WrapperProfile>
      <Title>Profile Events</Title>
      <div>
        {events.map((event) => (
          <ProfileCard key={event.description} event={event} />
        ))}
      </div>
    </WrapperProfile>
  );
};

export default ProfileEventPage;
