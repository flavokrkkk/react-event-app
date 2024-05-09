import styled from "styled-components";

interface MoodStylesProps {
  moodColor: string;
}

export const WrapperMood = styled.div`
  display: flex;
  align-items: center;
  margin-top: 70px;
  justify-content: center;
`;
export const MoodTitle = styled.h2<MoodStylesProps>`
  color: ${({ moodColor }) => moodColor};
`;

export const WrapperMoodItem = styled.div<MoodStylesProps>`
  display: flex;
  max-width: 600px;
  padding: 100px;
  flex-direction: column;
  gap: 30px;
  border: 3px solid ${({ moodColor }) => moodColor};
  border-radius: 30px;
`;

export const ContainerButton = styled.div`
  min-width: 300px;
  margin: 0 auto;
`;

export const WrapperMoodButton = styled.div`
  margin-bottom: 20px;
`;
