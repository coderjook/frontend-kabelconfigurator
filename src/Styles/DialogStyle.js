import styled from "styled-components";
import { ProductLabel } from "./ProductGrid";
import { romalOranje } from "../Styles/colors";

export const Dialog = styled.div`
  width: 500px;
  background-color: white;
  position: fixed;
  top: 75px;
  z-index: 5;
  max-height: calc(100% - 100px);
  left: calc(50% - 250px);
  display: flex;
  flex-direction: column;
`;

export const DialogContent = styled.div`
  overflow: auto;
  min-height: 100px;
  padding: 0px 40px;
  padding-bottom: 80px;
`;

export const DialogFooter = styled.div`
  box-shadow: 0px 2px 20px 0px grey;
  height: 60px;
  display: flex;
  justify-content: center;
`;

export const DialogShadow = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0px;
  background-color: black;
  opacity: 0.7;
  z-index: 4;
`;

export const DialogBanner = styled.div`
  min-height: 200px;
  margin-bottom: 20px;
  ${({ img }) => (img ? `background-image: url(${img});` : `min-height: 75px;`)}
  background-position: center;
  background-size: cover;
`;

export const DialogBannerName = styled(ProductLabel)`
  font-size: 20px;
  padding: 20px 40px;
  top: ${({ img }) => (img ? `100px` : `20px`)};
`;

export const ConfirmButton = styled.button`
  margin: 10px;
  color: white;
  height: 40px;
  // border-radius: 0px;
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
