import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { api } from "../api/api";
import Button from "../components/Button";
import Input from "../components/Input";
import ServiceWrapper from "../components/layout/ServiceWrapper";
import TodoItem from "../components/TodoItem";

const TodoPage = () => {
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
    getData();
  }, []);

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
        placeholder="todo를 입력해주세요."
        value={addTodo}
        onChange={(e) => {
          setAddTodo(e.target.value.trim());
        }}
      />
      <Button text="추가" onClick={handleTodo} />
      <Hr />

      <h3>Todo 수정/삭제</h3>
      {todoList?.map((item, i) => (
        <TodoItem item={item} key={`todo_list` + i} mutate={getData} />
      ))}
    </ServiceWrapper>
  );
};

const Hr = styled.div`
  margin: 40px 0;
  border: 1px solid #ddd;
`;
export default TodoPage;
