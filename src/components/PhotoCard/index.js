import React, { useEffect, useRef, useState } from "react";
import { ImgWrapper, Img, Button, Article } from "./style";
import { MdPets } from "react-icons/md";

const PHOTO_DEFAULT =
  "https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png";

export function PhotoCard({ id, likes = 0, src = PHOTO_DEFAULT }) {
  const ref = useRef(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const observer = new window.IntersectionObserver((entries) => {
      const { isIntersecting } = entries[0];
      if (isIntersecting) {
        setShow(true);
        observer.disconnect();
      }
    });
    observer.observe(ref.current);
  }, [ref]);

  return (
    <Article ref={ref}>
      {show && (
        <>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>
          <Button>
            <MdPets size="32px" />
            {likes} likes!
          </Button>
        </>
      )}
    </Article>
  );
}
