import styled from "@emotion/styled";

const FilterGlass = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 30vw;
  background: rgba(21, 90, 53, 0.63);
  border-radius: 30px;
`;

const Title = styled.h2`
  margin-bottom: 2%;
  text-align: center;
  color: white;
  font-family: "Roboto", sans-serif;
  font-size: 40px;
  @media (max-width: 900px) {
    font-size: 29px;
  }
  @media (max-width: 650px) {
    font-size: 24px;
  }
  @media (max-width: 500px) {
    font-size: 19px;
  }
  @media (max-width: 400px) {
    font-size: 14px;
  }
`;

const Button = styled.button`
  width: 250px;
  height: 60px;
  background: rgba(255, 255, 255, 0);
  border: 3px solid white;
  border-radius: 30px;
  color: white;
  font-size: 20px;
  font-weight: bold;
  &:hover {
    padding: 5px;
    color: orange;
  }
  @media (max-width: 900px) {
    width: 210px;
    height: 45px;
    font-size: 15px;
    border: 2px solid white;
  }
  @media (max-width: 650px) {
    width: 170px;
    height: 30px;
    font-size: 11px;
    border: 2px solid white;
  }
  @media (max-width: 500px) {
    width: 130px;
    height: 25px;
    font-size: 9px;
    border: 2px solid white;
  }
  @media (max-width: 400px) {
    width: 80px;
    height: 15px;
    font-size: 7px;
    border: 1.5px solid white;
  }
`;

const Filter = ({ children }) => {
  return (
    <FilterGlass>
      <Title>{children}</Title>
      <Button>Бүртгүүлэх</Button>
    </FilterGlass>
  );
};

export default Filter;
