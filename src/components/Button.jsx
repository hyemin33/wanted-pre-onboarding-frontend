import styled from "@emotion/styled";
import React from "react";

const Button = ({ onClick, text, type, ...props }) => {
  return (
    <ButtonWra onClick={onClick} {...props}>
      {text}
    </ButtonWra>
  );
};

const ButtonWra = styled.button`
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background: #505050;
  color: #fff;
  font-weight: bold;

  &:last-of-type {
    margin-top: 10px;
  }

  &:disabled {
    background: #bbb;
  }
`;
export default Button;
