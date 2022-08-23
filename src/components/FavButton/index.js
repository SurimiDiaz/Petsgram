import React from "react";
import { MdPets, MdFavorite } from "react-icons/md";
import { Button } from "../PhotoCard/style";

export const FavButton = ({ liked, likes, onClick }) => {
  const Icon = liked ? MdFavorite : MdPets;
  return (
    <div>
      <Button onClick={onClick}>
        <Icon size="32px" />
        {likes} likes!
      </Button>
    </div>
  );
};
