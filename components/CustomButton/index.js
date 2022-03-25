import styled from "@emotion/styled";

function CustomButton({ type, children }) {
  const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 1;
    font-size: 15px;
    padding: 13px 28px;
    font-weight: bold;
    transition: transform 0.25s ease-out;
    &: hover {
      transform: scale(1.05);
    }
    @media (min-width: 758px) {
      font-size: 18px;
      padding: 16px 40px;
    }
    ${type == "solid"
      ? `border-radius: 28px;
  background-color: #00ab84;
  color: white;
  border-width: 0;
  `
      : type == "outline"
      ? `border: 2px solid #ffffff;
      color: white;
      border-radius: 28px;
      background: none;
  `
      : `border: 0;
      color: #A9ADC0;
      background-color: #1f2028;
      padding: 0;
      @media (min-width:758px){
        padding: 0;
      }
 `}
  `;

  return <Button>{children}</Button>;
}

export default CustomButton;
