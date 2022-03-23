import styled from "@emotion/styled";
import CustomButton from "../CustomButton";

const Nav = styled.header`
  display: flex;
  aling-items: center;
  justify-content: space-between;
  margin: 0 24px;
  padding: 0 24px;
  height: 72px;

  @media (min-width: 640px) {
    margin: auto;
    margin: 0 36px;
    height: 85px;
  }
`;
const Logo = styled.img`
  width: 108px;
  @media (min-width: 640px) {
    width: 136px;
  }
`;

const Navigation = () => {
  return (
    <Nav>
      <Logo src="/Logo.svg"></Logo>
      <CustomButton type="ghost" text="Холбогдох"></CustomButton>
    </Nav>
  );
};

export default Navigation;
