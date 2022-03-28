import styled from "@emotion/styled";
import Filter from "../Filter";

const Banner = ({ button, img, children }) => {
  const BannerContainer = styled.div`
    border-radius: 10px;
    background-image: url(${img});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 270px;
    margin: 50px 0;
    @media (min-width: 758px) {
      height: 400px;
      margin: 70px 0;
    }
  `;
  return (
    <BannerContainer>
      <Filter button={button}>{children}</Filter>
    </BannerContainer>
  );
};

export default Banner;
