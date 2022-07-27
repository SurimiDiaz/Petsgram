import React, { useEffect, useRef, useState } from "react";
import { ImgWrapper, Img, Button, Article } from "./style";
import { MdPets, MdFavorite } from "react-icons/md";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useNearScreen } from "../../hooks/useNearScreen";
import { Link } from "react-router-dom";

const PHOTO_DEFAULT =
  "https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png";

export function PhotoCard({ id, likes = 0, src = PHOTO_DEFAULT }) {
  const [show, ref] = useNearScreen();
  const key = `like-${id}`;
  const [liked, setLiked] = useLocalStorage(key, false);

  const Icon = liked ? MdFavorite : MdPets;

  return (
    <Article ref={ref}>
      {show && (
        <>
          <Link to={`/photos/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>
          <Button onClick={() => setLiked(!liked)}>
            <Icon size="32px" />
            {likes} likes!
          </Button>
        </>
      )}
    </Article>
  );
}
