import React from "react";

import { PhotoCard } from "../PhotoCard";
import { useGetPhotos } from "../../hooks/useGetPhotos";
import { useParams } from "react-router-dom";

export const ListOfPhotoCardsComponent = () => {
  const { id } = useParams();

  const { loading, error, data } = useGetPhotos(id);

  if (error) {
    return <h2>Internal Server Error</h2>;
  }
  if (loading) {
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
