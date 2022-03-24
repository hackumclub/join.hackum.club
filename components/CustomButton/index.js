import styled from "@emotion/styled";

function CustomButton({ type, children }) {
  const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 178px;
    font-size: 15px;
    padding: 13px 13px;
    font-weight: bold;
    transition: transform 0.25s ease-out;
    &: hover {
      transform: scale(1.05);
    }
    @media (min-width: 640px) {
      font-size: 18px;
      width: 208px;
      padding: 16px 16px;
    }
    ${type == "solid"
      ? `border-radius: 28px;
  background-color: #00ab84;
  color: white;
  padding: 13px 13px;
  border-width: 0;
  `
      : type == "outline"
      ? `border: 2px solid #ffffff;
      color: white;
      border-radius: 28px;
      background-color: #1f2028;
  `
      : `border: 0;
      color: #A9ADC0;
      background-color: #1f2028;
 `}
  `;

  return <Button>{children}</Button>;
}

export default CustomButton;
