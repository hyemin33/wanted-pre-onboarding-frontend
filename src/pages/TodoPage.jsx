import React, { useEffect } from "react";
import { api } from "../api/api";
import ServiceWrapper from "../components/layout/ServiceWrapper";

const TodoPage = () => {
  useEffect(() => {
    const getData = () => {
      api
        .get("/todos")
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          throw new Error(err);
        });
    };
    getData();
  }, []);

  return <ServiceWrapper>todopage</ServiceWrapper>;
};

export default TodoPage;
