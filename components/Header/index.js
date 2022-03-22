import styled from "@emotion/styled";

const Testing = styled.button`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`;

const Header = () => {
  return (
    <div>
      <Testing>Hello</Testing>
      <p>Hii</p>
    </div>
  );
};

export default Header;
