import React from 'react';
import {ImgWrapper, Img, Button } from "./style"
import { MdPets } from "react-icons/md";

const PHOTO_DEFAULT = "https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png"

export function PhotoCard({id, likes = 0, src=PHOTO_DEFAULT}) {
  return (
    <article>
      <a href={`/detail/${id}`}>
<ImgWrapper>
  <Img src={src}/>
</ImgWrapper>
      </a>
      <Button>
        <MdPets size="32px"/>{likes} likes!
      </Button>
    </article>
  );
}

