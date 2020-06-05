import React from "react";

import { DialogFooter, ConfirmButton } from "../../../Styles/DialogStyle";
import {
  OrderStyled,
  OrderContent,
  OrderContainer,
  OrderItem,
  DetailItem,
} from "../../../Styles/OrderStyle";

import AssemblieDetails from "../../CoaxAssemblie/Assemblie/AssemblieDetails";

export function Order({ orders, setOrders }) {
  // const subtotal = orders.reduce((total, order) => {
  //   return total + getPrice(order);
  // }, 0);

  // const tax = subtotal * 0.21;
  // const total = subtotal + tax;

  let subPriceCable = null;
  const getPriceCable = (order) => {
    subPriceCable = order.cableLength * (order.inkoopprijs / order.prijsper);
    return subPriceCable;
  };

  let subPriceConnector = null;
  const getPriceConnector = (order) => {
    subPriceConnector = order.inkoopprijs / order.prijsper;
    return subPriceConnector;
  };

  let subPriceHaspel = null;
  const getPriceHaspel = (order) => {
    subPriceHaspel = order.inkoopprijs / order.prijsper;
    return subPriceHaspel;
  };

  let subPriceAfwerking = null;
  const getPriceAfwerking = (order) => {
    subPriceAfwerking = order.lengthTransKrimpkous * 0.25;
    return subPriceAfwerking;
  };

  const subtotal =
    subPriceAfwerking + subPriceHaspel + subPriceConnector + subPriceCable;

  return (
    <>
      {" "}
      <OrderStyled>
        <div>orderassemblie</div>
        <AssemblieDetails />
      </OrderStyled>
      <OrderStyled>
        <AssemblieDetails />
        {orders.length === 0 ? (
          <OrderContent>geen assemblie geconfigureerd</OrderContent>
        ) : (
          <OrderContent>
            {" "}
            <OrderContainer>Jouw assemblie:</OrderContainer>
            {orders.map((order, index) =>
              order.assemblieItem === "cable" ? (
                <OrderContainer>
                  <OrderItem>
                    <div>{order.typenummer}</div>
                    <div>{order.inkoopprijs}</div>
                    <div>prijs: {getPriceCable(order)}</div>
                  </OrderItem>
                  <DetailItem>lengte kabel: {order.cableLength}</DetailItem>
                  <DetailItem>subprice kabel: {subPriceCable}</DetailItem>
                </OrderContainer>
              ) : null
            )}
            {orders.map((order, index) =>
              order.assemblieItem === "connector" ? (
                <OrderContainer>
                  <OrderItem>
                    <div>{order.typenummer}</div>
                    <div>{order.inkoopprijs}</div>
                    <div>prijs: {getPriceConnector(order)}</div>
                  </OrderItem>
                  {order.installation && (
                    <DetailItem>afwerking: {order.installation}</DetailItem>
                  )}

                  {order.tule ? <DetailItem>{order.tule}</DetailItem> : null}
                </OrderContainer>
              ) : null
            )}
            {orders.map((order, index) =>
              order.assemblieItem === "haspel" ? (
                <OrderContainer>
                  <OrderItem>
                    <div>{order.typenummer}</div>
                    <div>{order.inkoopprijs}</div>
                    <div>prijs: {getPriceHaspel(order)}</div>
                  </OrderItem>
                </OrderContainer>
              ) : null
            )}
            {orders.map((order, index) =>
              order.assemblieItem === "afwerking" ? (
                <OrderContainer>
                  <OrderItem>
                    <div>{order.transKrimpkous}</div>
                    <div>{order.lengthTransKrimpkous}</div>
                    <div>prijs: {getPriceAfwerking(order)}</div>
                  </OrderItem>
                </OrderContainer>
              ) : null
            )}
            <OrderContainer>
              <OrderItem>
                <div>Sub-total</div>
                <div>{subtotal}</div>
                <div />
              </OrderItem>
              <OrderItem>
                <div>Tax</div>
                <div>formatPrice(tax)</div>
                <div />
              </OrderItem>
              <OrderItem>
                <div>Total</div>
                <div>formatPrice(total)</div>
                <div />
              </OrderItem>
            </OrderContainer>
          </OrderContent>
        )}
        <DialogFooter>
          <ConfirmButton>Vraag offerte aan</ConfirmButton>
        </DialogFooter>
      </OrderStyled>
    </>
  );
}
