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

const IconBox = styled.div`
  width: 50px;
  filter: invert(100%) sepia(66%) saturate(4794%) hue-rotate(179deg)
    brightness(81%) contrast(84%);
  height: 45px;
  border-radius: 5px;
  margin: 20px 10px 20px 20px;
  @media (min-width: 758px) {
    height: 50px;
  }
`;

const miniBanner = ({ title, children, icon }) => {
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

{
  /* <MiniBanner title="Сонирхол нэг хамт олонтой болох" text="Энэ хэсэгт энэний талаар дэлгэрэнгүй мэдээлэл байх болно. Энэ текстийг түр ашиглана"/> */
}

export default miniBanner;
