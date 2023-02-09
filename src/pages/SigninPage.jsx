import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../api/api";

import Input from "../components/Input";
import Button from "../components/Button";
import ServiceWrapper from "../components/layout/ServiceWrapper";
import auth from "../api/auth";

const SigninPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //로그인 검증
  const handleLogin = async () => {
    await api
      .post("/auth/signin", { email, password })
      .then((res) => {
        auth.setToken(res.data.access_token);
        navigate("/todo");
      })
      .catch((err) => {
        window.alert(err.response.data.message);
      });
  };

  return (
    <ServiceWrapper>
      <h3>로그인</h3>
      <Input
        data-testid="email-input"
        label="이메일"
        placeholder="이메일을 입력해주세요."
        value={email}
        onChange={(e) => {
          setEmail(e.target.value.trim());
        }}
      />
      <Input
        data-testid="password-input"
        label="패스워드"
        placeholder="패스워드를 입력해주세요."
        isPw={true}
        value={password}
        onChange={(e) => setPassword(e.target.value.trim())}
      />
      <Button
        data-testid="signin-button"
        text="로그인"
        disabled={!email || !password}
        onClick={handleLogin}
      />
    </ServiceWrapper>
  );
};

export default SigninPage;
