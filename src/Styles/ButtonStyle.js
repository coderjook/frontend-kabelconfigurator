import styled from "styled-components";
import { romalOranje } from "../Styles/colors";
import { romalBlauw } from "../Styles/colors";

export const ConfirmButton = styled.button`
  margin: 10px;
  color: white;
  padding: 10px;
  text-align: center;
  width: 200px;
  cursor: pointer;
  background-color: ${romalOranje};
  ${({ disabled }) =>
    disabled &&
    `
    opacity: 0.5;
    background-color: grey;
    pointer-events: none;
   `}
`;

export const ChangeButton = styled.button`
  margin: 10px;
  color: white;
  padding: 10px;
  text-align: center;
  width: 300px;
  filter: contrast(60%);
  cursor: pointer;
  background-color: ${romalBlauw};
  ${({ disabled }) =>
    disabled &&
    `
    opacity: 0.5;
    background-color: grey;
    pointer-events: none;
   `}
  &:hover {
    cursor: pointer;
    // margin-top: 0px;
    // margin-bottom: 5px;
    filter: contrast(100%);
    box-shadow: 0px 0px 3px 0px grey;
  }
`;
