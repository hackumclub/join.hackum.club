import styled from "@emotion/styled";
import { PopupButton } from "@typeform/embed-react";

function CustomButton({ variant, children }) {
  const Button = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 1;
    font-size: 15px;
    // padding: 13px 28px;
    font-weight: bold;
    transition: transform 0.25s ease-out;
    &: hover {
      transform: scale(1.05);
    }
    @media (min-width: 758px) {
      font-size: 18px;
      // padding: 16px 40px;
    }
    ${variant == "solid"
      ? `border-radius: 28px;
  background-color: #00ab84;
  color: white;
  border-width: 0;
  `
      : variant == "outline"
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

  return (
    <Button>
      <PopupButton
        id="AXGEjg7f"
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          borderRadius: "50px",
          border: "none",
          background: "transparent",
          padding: "13px 28px",
          cursor: "pointer",
          fontWeight: "bold",
          fontSize: "15px",
          color: "white",
        }}
      >
        {children}
      </PopupButton>
    </Button>
  );
}

export default CustomButton;
