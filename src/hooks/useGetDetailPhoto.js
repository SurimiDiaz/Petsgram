import { gql, useQuery } from "@apollo/client";
import { PhotoCard } from "../components/PhotoCard/index";
import { useParams, useNavigate } from "react-router-dom";
import React from "react";
import { AiFillCaretLeft } from "react-icons/ai";

const SIZE = "32px";
export function UseGetDetailPhoto() {
  const { id } = useParams();
  const history = useNavigate();
  const GET_DETAIL_PHOTO = gql`
    query getSinglePhoto($id: ID!) {
      photo(id: $id) {
        id
        categoryId
        src
        likes
        userId
        liked
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_DETAIL_PHOTO, {
    variables: { id },
  });

  if (error) {
    return <h2>Internal Server Error</h2>;
  }
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <button onClick={() => history(-1)}>
        <AiFillCaretLeft size={SIZE} />
      </button>
      <PhotoCard {...data?.photo} />
    </>
  );
}
