import styled from "styled-components";

export const WrapperErrorPage = styled.div`
  max-width: 500px;
  margin: 50px auto;
  text-align: center;
  height: 82.8vh;
  h1 {
    font-size: 75px;
  }
  h2 {
    font-weight: 600;
    font-size: 25px;
    text-transform: uppercase;
  }
  p {
    font-size: 17px;
  }
`;

export const ErrorPageBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 25px;
`;

export const Hr = styled.hr`
  width: 150px;
  display: block;
  margin: 20px auto 20px;
`;
