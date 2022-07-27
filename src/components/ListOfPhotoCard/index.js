import React from "react";
//import { photos } from "../../../api/db.json";
import { PhotoCard } from "../PhotoCard";
import { useQuery, gql } from "@apollo/client";

const PHOTOS_QUERY = gql`
  {
    photos {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

export const ListOfPhotoCard = () => {
  const { data, isLoading, error } = useQuery(PHOTOS_QUERY);

  if (error) {
    return <h2>Internal Server Error</h2>;
  }
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      {data && (
        <ul>
          {data.photos.map((photo) => {
            return <li key={photo.id}>{<PhotoCard {...photo} />}</li>;
          })}
        </ul>
      )}
    </>
  );
};
