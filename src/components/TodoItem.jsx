import styled from "@emotion/styled";
import React, { useState } from "react";
import { api } from "../api/api";
import Button from "./Button";
import Input from "./Input";

const TodoItem = ({ item, mutate }) => {
  const [changeTodo, setChangeTodo] = useState({
    todo: item?.todo,
    isCompleted: item?.isCompleted,
  });

  //todo 수정하기
  const handleTodo = async () => {
    await api
      .put(`/todos/${item.id}`, {
        todo: changeTodo.todo,
        isCompleted: changeTodo.isCompleted,
      })
      .then((res) => {
        console.log("성공");
        mutate();
      })
      .catch((err) => {
        window.alert(err.response.data.message);
      });
  };

  //todo 삭제하기
  const handleDelete = async () => {
    await api
      .delete(`/todos/${item.id}`)
      .then((res) => {
        console.log("성공");
        mutate();
      })
      .catch((err) => {
        window.alert(err.response.data.message);
      });
  };

  return (
    <TodoItemArea>
      <Input
        value={changeTodo.todo}
        onChange={(e) => {
          setChangeTodo({ ...changeTodo, todo: e.target.value });
        }}
      />
      <Button className="update" text="수정" onClick={handleTodo} />
      <Button className="delete" text="삭제" onClick={handleDelete} />
    </TodoItemArea>
  );
};

const TodoItemArea = styled.div`
  display: flex;
`;
export default TodoItem;
