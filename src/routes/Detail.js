import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Detail() {
  const params = useParams();

  const toDo = useSelector((state) =>
    state.find((toDo) => toDo.id === parseInt(params.id))
  );

  return (
    <>
      <h1>{toDo?.text}</h1>
      <h5>Created at: {toDo?.id}</h5>
    </>
  );
}

export default Detail;
