import React from "react";
import styled from "styled-components";

const Button = ({
  bgColor = "#1f2037",
  colorText = "#fff",
  width = "unset",
  height = "unset",
  text,
  handleOnClick,
}) => {
  return (
    <SButton
      bgColor={bgColor}
      colorText={colorText}
      width={width}
      height={height}
      onClick={handleOnClick}
    >
      {text}
    </SButton>
  );
};

export default Button;

const SButton = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: 6px 10px;
  border-radius: 6px;
  border: none;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.colorText};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
