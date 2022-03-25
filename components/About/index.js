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
          Бид өөрсдийн мэдлэг чадвараа ашиглан хүмүүсийн амьдрал, мэдээллийн
          хүртээмжийг нэмэгдүүлж, нийгмийн сайн сайханд хувь нэмрээ оруулах
          шинэ, шилдэг санаачлага гарган хэрэгжүүлдэг клуб юм. Бид өөрчлөлтийг
          хүлээдэг биш өөрсдөө манлайлж хийдэг хамт олон болж мэдээллийн ил, тод
          хүртээмжтэй байдлыг өндөр түвшинд хүргэхийг эрмэлзэнэ
        </Text>
      </Info>
    </Container>
  );
};
export default About;
