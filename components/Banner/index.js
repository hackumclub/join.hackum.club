import styled from "@emotion/styled";
import Filter from "../Filter";

const BannerContainer = styled.div`
  border-radius: 30px;
  background-image: url(bannerBg.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Banner = (props) => {
  return (
      <BannerContainer>
        <Filter text={props.text}></Filter>
      </BannerContainer>
  );
};

export default Banner;
