import styled from "@emotion/styled";

const Nav = styled.header`
  display: flex;
  aling-items: center;
  justify-content: space-between;
  margin: 0 24px;
  padding: 5px 24px;
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
      <button>Холбогдох</button>
    </Nav>
  );
};

export default Navigation;
