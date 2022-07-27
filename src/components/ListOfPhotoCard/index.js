import React from "react";
//import { photos } from "../../../api/db.json";
import { PhotoCard } from "../PhotoCard";
import { useGetPhotos } from "../../hooks/useGetPhotos";

export const ListOfPhotoCardsComponent = ({ categoryId }) => {
  const { loading, error, data } = useGetPhotos(categoryId);

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
