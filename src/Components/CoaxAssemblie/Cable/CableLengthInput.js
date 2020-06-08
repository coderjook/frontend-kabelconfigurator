import React from "react";
import styled from "styled-components";
import { romalOranje } from "../../../Styles/colors";

const InputStyled = styled.input`
  font-size: 18px;
  width: 60px;
  text-align: center;
  border: 1px solid grey;
  outline: none;
`;

const IncrementContainer = styled.div`
  display: flex;
  height: 24px;
  padding: 5px;
  margin: 10px 0px 10px 0px;
`;

const IncrementButton = styled.div`
  width: 23px;
  color: ${romalOranje};
  font-size: 20px;
  text-align: center;
  cursor: pointer;
  line-height: 23px;
  margin: 0px 10px;
  border: 1px solid ${romalOranje};
  ${({ disabled }) =>
    disabled &&
    `opacity: 0.5; 
     pointer-events: none; 
     `}
  &:hover {
    background-color: #ffe3e3;
  }
`;

export function CableLengthInput({ cableLength }) {
  return (
    <IncrementContainer>
      <div>lengte van de kabel in (meters)</div>
      <IncrementButton
        onClick={() => {
          cableLength.setValue(cableLength.value - 1);
        }}
        disabled={cableLength.value <= 1.0}
      >
        {" "}
        -{" "}
      </IncrementButton>
      <InputStyled {...cableLength} />
      <IncrementButton
        onClick={() => {
          cableLength.setValue(cableLength.value + 1);
        }}
      >
        {" "}
        +{" "}
      </IncrementButton>
    </IncrementContainer>
  );
}
