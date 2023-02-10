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

  &:disabled {
    background: #bbb;
  }

  &.delete {
    background: none;
    border: 1px solid #dd3333;
    color: #dd3333;
    margin-left: 10px;
    width: 100px;
  }

  &.update {
    background: none;
    border: 1px solid #333;
    color: #333;
    margin-left: 10px;
    width: 100px;
  }
`;
export default Button;
