import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Input from "../components/Input";
import Button from "../components/Button";
import ServiceWrapper from "../components/layout/ServiceWrapper";

const SigninPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //로그인 검증
  const handleLogin = () => {
    if (!email.includes("@")) {
      window.alert("이메일에 @를 포함하여 입력해주세요.");
    } else if (password.length < 8) {
      window.alert("비밀번호를 8자이상 입력해주세요.");
    } else {
      navigate("/todo");
    }
  };

  return (
    <ServiceWrapper>
      <h3>로그인</h3>
      <Input
        label="이메일"
        placeholder="이메일을 입력해주세요."
        value={email}
        onChange={(e) => {
          setEmail(e.target.value.trim());
        }}
      />
      <Input
        label="패스워드"
        placeholder="패스워드를 입력해주세요."
        isPw={true}
        value={password}
        onChange={(e) => setPassword(e.target.value.trim())}
      />
      <Button
        text="로그인"
        disabled={!email || !password}
        onClick={handleLogin}
      />
    </ServiceWrapper>
  );
};

export default SigninPage;
