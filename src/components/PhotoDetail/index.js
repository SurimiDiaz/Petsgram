import React from "react";
import { useParams } from "react-router-dom";

export const PhotoDetail = (props) => {
  const { id } = useParams();
  return <div>Hola el id es {id}</div>;
};
