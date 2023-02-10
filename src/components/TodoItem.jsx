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

  const [isEdit, setIsEdit] = useState(false);

  //todo 수정하기
  const handleTodo = async (type, completedValue) => {
    await api
      .put(`/todos/${item.id}`, {
        todo: isEdit ? changeTodo.todo : item?.todo,
        isCompleted: type === "check" ? completedValue : changeTodo.isCompleted,
      })
      .then((res) => {
        console.log("성공");
        mutate();
        setIsEdit(false);
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
      <input
        type="checkbox"
        checked={item.isCompleted}
        onChange={(e) => handleTodo("check", e.target.checked)}
      />
      {isEdit ? ( //수정모드
        <>
          <Input
            data-testid="modify-input"
            value={changeTodo.todo}
            onChange={(e) => {
              setChangeTodo({ ...changeTodo, todo: e.target.value });
            }}
          />
          <Button
            className="update"
            data-testid="submit-button"
            text="제출"
            onClick={handleTodo}
          />
          <Button
            className="delete"
            data-testid="cancel-button"
            text="취소"
            onClick={() => {
              setIsEdit(false);
            }}
          />
        </>
      ) : (
        <>
          <TodoText>{item.todo}</TodoText>
          <Button
            className="update"
            data-testid="modify-button"
            text="수정"
            onClick={() => {
              setIsEdit(true);
              setChangeTodo({ ...changeTodo, todo: item?.todo });
            }}
          />
          <Button
            className="delete"
            data-testid="delete-button"
            text="삭제"
            onClick={handleDelete}
          />
        </>
      )}
    </TodoItemArea>
  );
};

const TodoText = styled.p`
  font-size: 14px;
  margin-bottom: 20px;
  padding: 10px 5px 9px;
  width: 100%;
`;

const TodoItemArea = styled.li`
  display: flex;
`;
export default TodoItem;
