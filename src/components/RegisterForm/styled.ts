import styled from "styled-components";

export const WrapperForm = styled.div`
  min-width: 430px;
  padding: 10px;
`;

export const WrapperButton = styled.div`
  margin-top: 10px;
`;
export const WrapperError = styled.div`
  text-align: center;
  margin-bottom: 10px;
`;

export const TitleError = styled.h4`
  color: red;
  font-weight: 300;
`;

export const TitleForm = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

export const SpanForm = styled.span`
  cursor: pointer;
  &: hover {
    color: blue;
  }
`;
