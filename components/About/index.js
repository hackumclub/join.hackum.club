import styled from "@emotion/styled";

const About = () => {
  const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 70px 0;
    @media (max-width: 758px) {
      margin: 50px 0;
    }
  `;
  const Logo = styled.img`
    width: 120px;
    height: 120px;
    margin: 10px;

    @media (min-width: 758px) {
      margin: 30px;
      width: 200px;
      height: 200px;
    }
  `;
  const Info = styled.div`
    margin: 0 0 0 30px;
    @media (min-width: 758px) {
      margin: 0 0 0 100px;
    }
  `;
  const Text = styled.div`
    color: white;
    font-weight: 700;
    font-size: 12px;
    line-height: 22px;
    color: #a9adc0;
    @media (min-width: 758px) {
      font-size: 20px;
      line-height: 32px;
    }
  `;
  const Title = styled.div`
    color: white;
    font-weight: 700;
    font-size: 18px;
    line-height: 32px;
    @media (min-width: 758px) {
      font-size: 25px;
    }
  `;
  return (
    <Container>
      <Logo src="/Frame 2.svg"></Logo>
      <Info>
        <Title>БИДНИЙ ТУХАЙ</Title>
        <Text>
          Монгол Улсын Их Сургуулийн “HACKUM” клуб нь 2017 оны 8-р сард “HACKUM”
          фэйсбүүк чатботыг гаргаж 2017 оны 9-р сард албан ёсоор байгуулагдсан
          бөгөөд Мэдээлэл Технологийн чиглэлээр үйл ажиллагаагаа явуулдаг оюутны
          клуб юм.
        </Text>
      </Info>
    </Container>
  );
};
export default About;
