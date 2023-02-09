import React from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

import Button from "../components/Button";
import ServiceWrapper from "../components/layout/ServiceWrapper";

const Root = () => {
  const navigate = useNavigate();

  return (
    <ServiceWrapper>
      <ButtonArea>
        <Button text="회원가입" onClick={() => navigate("/signup")} />
        <Button text="로그인" onClick={() => navigate("/signin")} />
      </ButtonArea>
    </ServiceWrapper>
  );
};

const ButtonArea = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 40px;
`;
export default Root;
