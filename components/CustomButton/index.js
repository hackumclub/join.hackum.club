import styled from "@emotion/styled";

function CustomButton(props) {
  const GhostButton = styled.button`
    color: #a9adc0;
    cursor: pointer;
    font-weight: bold;
    font-size: 15px;
    margin-top: 24px;
    background-color: #1f2028;
    border-width: 0;

    display: inline-block;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: #a9adc0;
      transform-origin: bottom right;
      transition: transform 0.25s ease-out;
    }
    &:hover:after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }

    @media (min-width: 640px) {
      margin-top: 30px;
      font-size: 18px;
    }
  `;
  const OutlinedButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: 2px solid #ffffff;
    color: white;
    border-radius: 28px;
    width: 178px;
    font-size: 15px;
    padding: 13px 13px;
    font-weight: bold;
    background-color: #1f2028;
    transition: transform 0.25s ease-out;

    &: hover {
      transform: scale(1.05);
    }

    @media (min-width: 640px) {
      font-size: 18px;
      width: 208px;
      padding: 16px 16px;
    }
  `;
  const SolidButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 28px;
    width: 178px;
    background-color: #00ab84;
    color: white;
    padding: 13px 13px;
    font-size: 15px;
    font-weight: bold;
    border-width: 0;
    &: hover {
      transform: scale(1.05);
    }
    @media (min-width: 640px) {
      font-size: 18px;
      width: 208px;
      padding: 16px 16px;
    }
  `;

  return (
    <div>
      {props.type == "ghost" && <GhostButton>{props.text}</GhostButton>}
      {props.type == "outline" && <OutlinedButton>{props.text}</OutlinedButton>}
      {props.type == "solid" && <SolidButton>{props.text}</SolidButton>}
    </div>
  );
}

export default CustomButton;
