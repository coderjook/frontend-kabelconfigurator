import styled from "styled-components";
import { romalBlauw, romalLichtBlauw, romalOranje } from "./colors";
import { DialogContent } from "./DialogStyle";

export const OrderStyled = styled.div`
  overflow: auto;
  position: fixed;
  right: 0px;
  top: 100px;
  width: 340px;
  height: calc(100% - 100px);
  z-index: 10;
  box-shadow: 4px 0px 5px 4px grey;
  background-color: white;
  display: flex;
  flex-direction: column;
`;
export const OrderContent = styled(DialogContent)`
  padding: 20px;
  height: 100%;
`;

export const OrderContainer = styled.div`
  padding: 10px 0px;
  border-bottom: 1px solid grey;
`;

export const OrderTitle = styled.div`
  background-color: ${romalLichtBlauw};
  filter: contrast(80%);
  color: ${romalBlauw};
  padding: 5px;
  display: block;
  // display: grid;
  // grid-template-columns: 150px 40px 60px;
  // justify-content: space-between;
`;

export const OrderItem = styled.div`
  padding: 3px 0px;
  display: grid;
  grid-template-columns: 1fr;
  justify-content: space-between;
`;

export const DetailItem = styled.div`
  color: gray;
  font-size: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
`;

export const OrderGrid2 = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  justify-items: start;
  row-gap: 2px;
  column-gap: 10px;
  border-bottom: 1px solid ${romalOranje};

  padding: 10px;
  margin-left: 20px;
`;
