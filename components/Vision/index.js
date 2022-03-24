import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { useState } from "react";
function Vision() {
  const Con = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    background-color: #292a32;
    width: 88vw;
    height: 350px;
    border-radius: 10px;
    grid-gap: 10px;
    padding: 30px;
    @media (min-width: 758px) {
      height: 402px;
      grid-gap: 20px;
      padding: 40px;
    }
  `;
  const ItemsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
  `;

  const Button = styled.div`
    background: none;
    cursor: pointer;
    border-width: 0;
    color: #74757a;
    font-size: 14px;
    font-weight: bold;
    line-height: 32px;
    height: 32px;
    @media (min-width: 758px) {
      width: 241px;
      font-size: 24px;
    }
  `;

  const Arrow = styled.img`
    width: 15px;
    height: 10px;
    @media (min-width: 640px) {
      width: 21px;
      height: 16px;
    }
  `;
  const Title = styled.h1`
    display: flex;
    font-size: 14px;
    font-weight: bold;
    line-height: 20px;
    color: white;
    @media (min-width: 758px) {
      font-size: 24px;
      line-height: 32px;
    }
  `;
  const Text = styled.p`
    font-weight: bold;
    color: #a9adc0;
    font-size: 12px;
    line-height: 18px;
    @media (min-width: 758px) {
      font-size: 20px;
      line-height: 32px;
    }
  `;
  const Rectangle = styled.div`
    background-color: #c4c4c4;
    @media (min-width: 758px) {
      margin: 0 22px 0 0;
      width: 32px;
      height: 32px;
    }
  `;
  const [field, setField] = useState("goal");
  const [visionSelected, setVisionSelected] = useState(false);
  const [goalSelected, setGoalSelected] = useState(true);

  return (
    <Con>
      <ItemsContainer>
        <Button
          onClick={() => {
            setField("goal");
            setGoalSelected(true);
            setVisionSelected(false);
          }}
        >
          {goalSelected && (
            <span style={{ color: "white" }}>ЭРХЭМ ЗОРИЛГО</span>
          )}
          {visionSelected && <span>ЭРХЭМ ЗОРИЛГО</span>}

          <Arrow src="/Vector.svg"></Arrow>
        </Button>

        <Button
          onClick={() => {
            setField("vision");
            setGoalSelected(false);
            setVisionSelected(true);
          }}
        >
          {" "}
          {visionSelected && (
            <span style={{ color: "white" }}>АЛСЫН ХАРАА</span>
          )}
          {goalSelected && <span>АЛСЫН ХАРАА</span>}
          <Arrow src="/Vector.svg"></Arrow>
        </Button>
      </ItemsContainer>
      {field == "goal" && (
        <ItemsContainer>
          <Title>
            {" "}
            <Rectangle></Rectangle>БИДНИЙ ЗОРИЛГО
          </Title>
          <Text>
            Бид өөрсдийн мэдлэг чадвараа ашиглан хүмүүсийн амьдрал, мэдээллийн
            хүртээмжийг нэмэгдүүлж, нийгмийн сайн сайханд хувь нэмрээ оруулах
            шинэ, шилдэг санаачлага гарган хэрэгжүүлдэг клуб юм. Бид өөрчлөлтийг
            хүлээдэг биш өөрсдөө манлайлж хийдэг хамт олон болж мэдээллийн ил,
            тод хүртээмжтэй байдлыг өндөр түвшинд хүргэхийг эрмэлзэнэ
          </Text>
        </ItemsContainer>
      )}
      {field == "vision" && (
        <ItemsContainer>
          <Title>
            <Rectangle></Rectangle> БИДНИЙ АЛСЫН ХАРАА
          </Title>
          <Text>
            Гишүүн бүр суралцах хугацаандаа эзэмшиж буй мэргэжлийнхээ дагуу
            нийгэм болоод хүмүүсийн амьдралд нөлөөлөхүйц төсөл, хөтөлбөрийн нэг
            хэсэг болж туршлага хуримтлуулж авдаг МУИС-н шилдэг клуб болох.
          </Text>
        </ItemsContainer>
      )}
    </Con>
  );
}

export default Vision;
