import { FC } from "react";
import { Button } from "antd";

import {
  ContainerButton,
  MoodTitle,
  WrapperMood,
  WrapperMoodButton,
  WrapperMoodItem,
} from "./styled";
import { useActions } from "../../hooks/useActions";

interface MoodColorProps {
  moodColor: string;
}

const MoodEvent: FC<MoodColorProps> = ({ moodColor }) => {
  const { toggleColor } = useActions();

  const handleMoodColorRed = () => {
    toggleColor("#F08080");
  };
  const handleMoodColorBlack = () => {
    toggleColor("black");
  };
  const handleMoodColorGreen = () => {
    toggleColor("#20B2AA");
  };
  const handleMoodColorBlue = () => {
    toggleColor("#4169E1");
  };
  const handleMoodColorPurple = () => {
    toggleColor("#9370DB");
  };

  return (
    <div style={{ height: "80vh" }}>
      <WrapperMood>
        <WrapperMoodItem moodColor={moodColor}>
          <MoodTitle moodColor={moodColor}>
            Выберите цвет вашего настроения
          </MoodTitle>
          <ContainerButton>
            <WrapperMoodButton>
              <Button block onClick={handleMoodColorRed}>
                Red
              </Button>
            </WrapperMoodButton>
            <WrapperMoodButton>
              <Button block onClick={handleMoodColorGreen}>
                Green
              </Button>
            </WrapperMoodButton>
            <WrapperMoodButton>
              <Button block onClick={handleMoodColorBlue}>
                Blue
              </Button>
            </WrapperMoodButton>
            <WrapperMoodButton>
              <Button block onClick={handleMoodColorPurple}>
                Purple
              </Button>
            </WrapperMoodButton>
            <WrapperMoodButton>
              <Button block onClick={handleMoodColorBlack}>
                Black
              </Button>
            </WrapperMoodButton>
          </ContainerButton>
        </WrapperMoodItem>
      </WrapperMood>
    </div>
  );
};

export default MoodEvent;
