import styled from "@emotion/styled";
import Image from "next/image";

const FlexContainer = styled.div`
  widht: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  margin: 15px 0;
`;

const MiniBannerDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 70%;
  height: 150px;
  background: rgba(41, 42, 50, 1);
  border-radius: 10px;
`;

const TextBox = styled.div`
  width: 80%;
  height: 100px;
  margin: 0 10px;
`;

const Title = styled.h3`
  color: white;
  font-weight: bold;
  margin-top: 0px;
  font-size: 13px;
  @media (min-width: 758px) {
    font-size: 20px;
  }
`;

const Text = styled.p`
  color: rgba(169, 173, 192, 1);
  font-weight: bold;
  font-size: 11px;
  @media (min-width: 758px) {
    font-size: 15px;
  }
`;

const MiniBanner = ({ title, children, icon, color }) => {
  const IconBox = styled.div`
    ${color == "red"
      ? "filter: invert(31%) sepia(93%) saturate(1345%) hue-rotate(329deg) brightness(90%) contrast(108%);"
      : color == "yellow"
      ? "filter: invert(62%) sepia(99%) saturate(443%) hue-rotate(8deg) brightness(101%) contrast(97%);"
      : color == "green"
      ? "filter: invert(46%) sepia(26%) saturate(1939%) hue-rotate(123deg) brightness(100%) contrast(101%);"
      : color == "blue"
      ? "filter: invert(37%) sepia(51%) saturate(6012%) hue-rotate(182deg) brightness(96%) contrast(101%);"
      : "filter: invert(100%) sepia(66%) saturate(4794%) hue-rotate(179deg) brightness(81%) contrast(84%);"}
    width: 50px;
    height: 45px;
    border-radius: 5px;
    margin: 20px 10px 20px 20px;
    @media (min-width: 758px) {
      height: 50px;
    }
  `;
  return (
    <FlexContainer>
      <MiniBannerDiv>
        <IconBox>
          <Image src={icon} alt="icon" width={50} height={50} />
        </IconBox>
        <TextBox>
          <Title>{title}</Title>
          <Text>{children}</Text>
        </TextBox>
      </MiniBannerDiv>
    </FlexContainer>
  );
};

export default MiniBanner;
