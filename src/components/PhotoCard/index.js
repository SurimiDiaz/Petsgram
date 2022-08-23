import React, { useEffect, useRef, useState } from "react";
import { ImgWrapper, Img, Article } from "./style";
import { FavButton } from "../FavButton";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useNearScreen } from "../../hooks/useNearScreen";
import { Link } from "react-router-dom";
import { useToggleLikeMutation } from "../../hooks/useToggleLikeMutation";

const PHOTO_DEFAULT =
  "https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png";

export function PhotoCard({ id, likes = 0, src = PHOTO_DEFAULT }) {
  const [show, ref] = useNearScreen();
  const key = `like-${id}`;
  const [liked, setLiked] = useLocalStorage(key, false);
  const { mutationAnonLike, data, loading, error } = useToggleLikeMutation();

  const handleFavClick = () => {
    !liked &&
      mutationAnonLike({
        variables: {
          input: { id },
        },
      });

    setLiked(!liked);
  };

  return (
    <Article ref={ref}>
      {show && (
        <>
          <Link to={`/photos/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>
          <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
        </>
      )}
    </Article>
  );
}
