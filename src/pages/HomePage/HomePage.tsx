import MoodEvent from "../../components/MoodEvent/MoodEvent";
import { useAppSelector } from "../../hooks/useAppSelector";
import { MoodSelectors } from "../../store/selectors";
import { Title } from "../../styles/global";

const HomePage = () => {
  const { moodColor } = useAppSelector(MoodSelectors);

  return (
    <div>
      <Title>Home</Title>
      <MoodEvent moodColor={moodColor} />
    </div>
  );
};

export default HomePage;
