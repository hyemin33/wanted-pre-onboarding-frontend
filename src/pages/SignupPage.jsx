import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../api/api";
import auth from "../api/auth";

import Input from "../components/Input";
import Button from "../components/Button";
import ServiceWrapper from "../components/layout/ServiceWrapper";

const SignupPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //email 유효성검사
  const emailRegExp = /@/;

  //토큰있으면 todo로 리다이렉트
  useEffect(() => {
    if (auth.getToken()) {
      navigate("/todo");
    }
  }, []);

  //회원가입 검증
  const handleSubmit = async () => {
    if (!emailRegExp.test(email)) {
      window.alert("이메일에 @를 포함하여 입력해주세요.");
    } else if (password.length < 8) {
      window.alert("비밀번호를 8자이상 입력해주세요.");
    } else {
      await api
        .post("/auth/signup", { email, password })
        .then((res) => {
          navigate("/signin");
        })
        .catch((err) => {
          window.alert(err.response.data.message);
        });
    }
  };

  return (
    <ServiceWrapper>
      <h3>회원가입</h3>
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
        data-testid="signup-button"
        text="회원가입"
        disabled={
          !email || !password || password.length < 8 || !emailRegExp.test(email)
        }
        onClick={handleSubmit}
      />
    </ServiceWrapper>
  );
};

export default SignupPage;
