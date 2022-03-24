import styled from "@emotion/styled";

const About = () => {
  const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
  `;
  const Logo = styled.img`
    width: 150px;
    height: 150px;
    margin: 30px;
    @media (min-width: 640px) {
      width: 200px;
      height: 200px;
    }
  `;
  const Info = styled.div`
    margin: 30px;
    @media (min-width: 640px) {
      margin: 50px;
    }
  `;
  const Text = styled.div`
    color: white;
    font-weight: 700;
    line-height: 32px;
    font-size: 15px;
    color: #a9adc0;
    @media (min-width: 640px) {
      font-size: 20px;
    }
  `;
  const Title = styled.div`
    color: white;
    font-weight: 700;
    font-size: 20px;
    line-height: 32px;
  `;
  return (
    <Container>
      <Logo src="/Frame 2.svg"></Logo>
      <Info>
        <Title>
          <h1>БИДНИЙ ТУХАЙ</h1>
        </Title>
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
