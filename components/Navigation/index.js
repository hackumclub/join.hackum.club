import styled from "@emotion/styled";
import { Grid } from "@/components/Grid";

const Nav = styled.header`
  display: flex;
  aling-items: center;
  justify-content: space-between;
  padding: 5px 0;
  height: 72px;

  @media (min-width: 640px) {
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
    <Grid>
      <Nav>
        <Logo src="/Logo.svg"></Logo>
        <button>Холбогдох</button>
      </Nav>
    </Grid>
  );
};

export default Navigation;
