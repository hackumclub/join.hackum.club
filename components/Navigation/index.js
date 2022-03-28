import styled from "@emotion/styled";
import { Grid } from "@/components/Grid";
import CustomButton from "../CustomButton";

const Nav = styled.header`
  display: flex;
  aling-items: center;
  justify-content: space-between;
  padding: 5px 0;
  height: 72px;

  @media (min-width: 758px) {
    height: 85px;
  }
`;
const Logo = styled.img`
  width: 108px;
  @media (min-width: 758px) {
    width: 136px;
  }
`;

const Navigation = () => {
  return (
    <Nav>
      <Logo src="/Logo.svg"></Logo>
      {/* <CustomButton>Холбогдох</CustomButton> */}
    </Nav>
  );
};

export default Navigation;
