import styled from "@emotion/styled";
import React from "react";

const Button = ({ onClick, text, type, ...props }) => {
  return <ButtonWra onClick={onClick}>{text}</ButtonWra>;
};

const ButtonWra = styled.button`
  width: auto;
  height: 40px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: #fff;
  cursor: pointer;
  color: #8f47e6;
  font-weight: bold;

  &:last-of-type {
    margin-top: 10px;
  }
`;
export default Button;
