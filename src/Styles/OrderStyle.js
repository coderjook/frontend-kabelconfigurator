import styled from "styled-components";
import { romalBlauw, romalLichtBlauw, romalOranje } from "./colors";
import { DialogContent } from "./DialogStyle";

export const OrderStyled = styled.div`
  overflow: auto;
  position: fixed;
  right: 0px;
  top: 50px;
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

export const DetailsOrderStyled = styled.div`
  margin: 0px 20px 0px 20px;
`;

export const OrderContainer = styled.div`
  padding: 0px;
  border-bottom: 1px solid grey;
`;

export const OrderHeader = styled.div`
  background-color: ${romalBlauw};
  filter: contrast(80%);
  color: ${romalLichtBlauw};
  font-size: 14px;
  padding: 3px;
  display: block;
`;

export const OrderTitle = styled.div`
  background-color: ${romalLichtBlauw};
  filter: contrast(80%);
  color: ${romalBlauw};
  font-size: 14px;
  padding: 3px;
  display: block;
`;

export const OrderItem = styled.div`
  padding: 3px 0px;
  display: grid;
  font-size: 14px;
  grid-template-columns: 1fr;
  justify-content: space-between;
`;

export const DetailItem = styled.div`
  color: gray;
  font-size: 10px;
  display: grid;
  margin-bottom: 3px;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
`;

export const DetailsOrderGrid3 = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 2fr;
  justify-items: start;
  row-gap: 2px;
  column-gap: 10px;
  border-bottom: 1px solid ${romalOranje};
  padding: 5px;
  margin-left: 20px;
`;

export const DetailsOrderGrid4 = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr 1fr;
  justify-items: start;
  row-gap: 2px;
  column-gap: 10px;
  border-bottom: 1px solid ${romalOranje};
  padding: 5px;
  margin-left: 0px;
`;

export const DetailsOrderGrid9 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  justify-items: start;
  row-gap: 2px;
  column-gap: 10px;
  border-bottom: 1px solid ${romalOranje};
  padding: 5px;
  margin-left: 0px;
`;

export const AssemblieOrdersHeader = styled.div`
  background-color: ${romalBlauw};
  // position: fixed;
  filter: contrast(80%);
  color: white;
  padding: 5px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  justify-items: start;
  row-gap: 2px;
  column-gap: 10px;
  margin-bottom: 20px;
`;

export const DetailsOrderTitle = styled.div`
  background-color: ${romalLichtBlauw};
  filter: contrast(80%);
  color: ${romalBlauw};
  padding: 5px;
  // display: block;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr 1fr;
  justify-items: start;
  row-gap: 2px;
  column-gap: 10px;
`;

export const DetailsOrderFooter = styled.div`
  background-color: ${romalLichtBlauw};
  filter: contrast(80%);
  color: black;
  padding: 5px;
  // display: block;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr 1fr;
  justify-items: start;
  row-gap: 2px;
  column-gap: 10px;
  margin-bottom: 30px;
`;

export const DetailsOrderFinalPrice = styled.div`
  background-color: ${romalBlauw};
  filter: contrast(80%);
  color: white;
  padding: 5px;
  // display: block;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr 1fr;
  justify-items: start;
  row-gap: 2px;
  column-gap: 10px;
  margin-bottom: 30px;
`;
