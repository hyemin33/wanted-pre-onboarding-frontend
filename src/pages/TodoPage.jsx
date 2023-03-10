import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../api/api";
import auth from "../api/auth";

import Button from "../components/Button";
import Input from "../components/Input";
import ServiceWrapper from "../components/layout/ServiceWrapper";
import TodoItem from "../components/TodoItem";

const TodoPage = () => {
  const navigate = useNavigate();

  const [addTodo, setAddTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  //todo list 불러오기
  const getData = async () => {
    await api
      .get("/todos")
      .then((res) => {
        setTodoList(res.data);
      })
      .catch((err) => {
        throw new Error(err);
      });
  };

  useEffect(() => {
    if (auth.getToken()) {
      getData();
    } else {
      //토큰없으면 signin로 리다이렉트
      navigate("/signin");
    }
  }, [auth]);

  //todo 추가하기
  const handleTodo = async () => {
    await api
      .post("/todos", { todo: addTodo })
      .then((res) => {
        setAddTodo("");
        getData();
      })
      .catch((err) => {
        window.alert(err.response.data.message);
      });
  };

  return (
    <ServiceWrapper>
      <h3>Todo 추가</h3>
      <Input
        data-testid="new-todo-input"
        placeholder="todo를 입력해주세요."
        value={addTodo}
        onChange={(e) => {
          setAddTodo(e.target.value.trim());
        }}
      />
      <Button
        data-testid="new-todo-add-button"
        text="추가"
        onClick={handleTodo}
      />
      <Hr />

      <h3>Todo 수정/삭제</h3>
      {todoList?.length > 0 ? (
        <ul>
          {todoList?.map((item, i) => (
            <TodoItem item={item} key={`todo_list` + i} mutate={getData} />
          ))}
        </ul>
      ) : (
        <EmptyText>
          <p>
            Todo가 없습니다.
            <br />
            Todo를 추가해주세요.
          </p>
        </EmptyText>
      )}
    </ServiceWrapper>
  );
};

const EmptyText = styled.div`
  padding: 20px 0;
  & > p {
    font-size: 14px;
    line-height: 1.5;
    text-align: center;
    color: #5f5f5f;
    font-weight: 500;
  }
`;
const Hr = styled.div`
  margin: 40px 0;
  border: 1px solid #ddd;
`;
export default TodoPage;
