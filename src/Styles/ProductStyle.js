import styled from "styled-components";
import { romalBlauw, romalLichtBlauw } from "./colors";

export const ProductStyled = styled.div`
  margin: 0px 400px 0px 0px;
`;

export const ProductHeader = styled.div`
  display: grid;
  filter: contrast(80%);
  color: ${romalBlauw};
  background-color: ${romalLichtBlauw};

  grid-template-columns: 4fr 1fr 1fr;
  justify-items: start;
  row-gap: 20px;
  // column-gap: 5px;
  padding: 15px 10px 15px 20px;
  margin-bottom: 10px;
  font-size: 20px;
  &:hover {
    filter: contrast(100%);
    color: grey;
    cursor: pointer;
  }
  ${({ active }) =>
    active
      ? `
    background-color: ${romalBlauw};
    color: white;
    &:hover {
      color: white;
      cursor: pointer;
      
    }
  `
      : `
    // pointer-events: none; 
  `}
`;

export const ProductContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  justify-items: start;
  row-gap: 20px;
  // column-gap: 5px;
  padding: 15px 10px 15px 20px;
  margin-bottom: 10px;
  font-size: 18px;
`;
