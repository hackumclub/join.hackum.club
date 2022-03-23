import styled from "@emotion/styled"

const FlexContainer = styled.div`
  widht: 100%;
  height: auto;
  display: flex;
  justify-content: center;
`

const MiniBannerDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 70%;
  height: 150px;
  background: rgba(41, 42, 50, 1);
  border-radius: 10px;
`;

const TextBox = styled.div`
  width: 80%;
  height: 100px;
  margin: 20px 20px 20px 10px;
`;

const Title = styled.h3`
  color: white;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  margin-top: 5px;
`

const Text = styled.p`
  color: rgba(169, 173, 192, 1);
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
`

const IconBanner = styled.div`
  width: 50px;
  height: 50px;
  background: rgba(196, 196, 196, 1);
  border-radius: 5px;
  margin: 20px 10px 20px 20px;
`

const miniBanner = (props) => {
  return (
    <FlexContainer>
      <MiniBannerDiv>
        <IconBanner>{props.link}</IconBanner>
        <TextBox>
          <Title>{props.title}</Title>
          <Text>{props.text}</Text>
        </TextBox>
      </MiniBannerDiv>
    </FlexContainer>
  );
};

export default miniBanner;