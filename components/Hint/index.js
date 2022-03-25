import styled from "@emotion/styled";
import React from "react";

function Hint({ children, title, icon, color }) {
  const Container = styled.div`
    heigth: 268px;
    margin: 10px;
    @media (min-width: 758px) {
      height: 313px;
    }
  `;
  const Rectangle = styled.div`
    background-color: #292a32;
    border-radius: 10px;
    height: 245px;
    margin-top: 20px;
    padding: 10px;
    @media (min-width: 758px) {
      height: 286px;
      margin-top: 27px;
    }
  `;
  const Icon = styled.img`
    ${color == "red"
      ? "filter: invert(31%) sepia(93%) saturate(1345%) hue-rotate(329deg) brightness(90%) contrast(108%);"
      : color == "yellow"
      ? "filter: invert(62%) sepia(99%) saturate(443%) hue-rotate(8deg) brightness(101%) contrast(97%);"
      : color == "green"
      ? "filter: invert(46%) sepia(26%) saturate(1939%) hue-rotate(123deg) brightness(100%) contrast(101%);"
      : color == "blue"
      ? "filter: invert(37%) sepia(51%) saturate(6012%) hue-rotate(182deg) brightness(96%) contrast(101%);"
      : "filter: invert(100%) sepia(66%) saturate(4794%) hue-rotate(179deg) brightness(81%) contrast(84%);"}
    position: relative;
    height: 55px;
    width: 55px;
    top: -20px;
    @media (min-width: 758px) {
      height: 60px;
      width: 60px;
      top: -26px;
    }
  `;
  const Title = styled.h1`
    font-weight: bold;
    color: white;
    text-transform: uppercase;
    position: relative;
    font-size: 20px;
    margin: 40px 0 0 10px;
    @media (min-width: 758px) {
      font-size: 24px;
      margin: 0px 0 0 20px;
    }
  `;
  const Text = styled.p`
    color: #a9adc0;
    font-size: 14px;
    margin: 15px 0 0 10px;
    @media (min-width: 758px) {
      font-size: 18px;
      margin: 15px 0 0 20px;
    }
  `;

  return (
    <Container>
      <Rectangle>
        <Icon src={icon}></Icon>
        <Title>{title}</Title>
        <Text>{children}</Text>
      </Rectangle>
    </Container>
  );
}

export default Hint;
