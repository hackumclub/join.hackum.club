import styled from "@emotion/styled";
import CustomButton from "../CustomButton";

const FilterGlass = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  background: rgba(21, 90, 53, 0.63);
  border-radius: 10px;
`;

const Title = styled.h2`
  margin-bottom: 2%;
  text-align: center;
  color: white;
  font-size: 22px;
  @media (min-width: 758px) {
    font-size: 38px;
  }
`;

const Filter = ({ button, children }) => {
  return (
    <FilterGlass>
      <Title>{children}</Title>
      {button == "yes" && (
        <CustomButton type="outline">Бүртгүүлэх</CustomButton>
      )}
    </FilterGlass>
  );
};

export default Filter;
