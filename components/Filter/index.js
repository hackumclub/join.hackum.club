import styled from "@emotion/styled";

const FilterGlass = styled.div`
  // width: 100%;
  height: 30vw;
  background: rgba(21, 90, 53, 0.63);
  border-radius: 30px;
  display: flex;
  justify-content: center;
`;

const Garchig = styled.h2`
  margin-top: 7%;
  text-align: center;
  color: white;
  font-family: 'Roboto', sans-serif;
  font-size: 40px;
`

const buttonDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Button = styled.button`
  display: block;
  width: 170px;
  height: 60px;
  background: rgba(255, 255, 255, 0);
  border: 3px solid white;
  border-radius: 30px;
  color: white;
  font-weight: bold;
  &:hover{
    padding: 5px;
    color: orange;
  }
`

const Filter = (props) => {
  return (
      <FilterGlass>
        <Garchig>
          {props.text}
          <buttonDiv>
            <Button>Бүртгүүлэх</Button>
          </buttonDiv>
        </Garchig>
      </FilterGlass>
  );
};

export default Filter;