import styled from "@emotion/styled";

function Arrow() {
  const Icon = styled.img`
    width: 27px;
    height: 27px;
    padding: 8px;
    border: 2px solid #a9adc0;
    border-radius: 100%;
    @media (min-width: 758px) {
      width: 37px;
      height: 37px;
      padding: 11px;
    }
  `;
  const Con = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 60px;
    margin: 70px 0;
    @media(max-width: 758px){
      margin: 50px 0;
      }
  `;
  const Text = styled.p`
    font-size: 15px;
    font-weight: bold;
    line-height: 32;
    color: #a9adc0;
    margin: 0 10px;
    @media (min-width: 758px) {
      font-size: 20px;
      line-height: 32;
      margin: 0 10px;
    }
  `;
  return (
    <Con>
      <Icon src="/Arrow - Bottom.svg"></Icon>
      <Text>Клубийн дэлгэрэнгүй мэдээлэл</Text>
    </Con>
  );
}

export default Arrow;
