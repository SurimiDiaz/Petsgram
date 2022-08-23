import React from "react";
import { gql, useMutation } from "@apollo/client";

const LIKE_PHOTO = gql`
  mutation likeAnonymousPhoto($input: LikePhoto!) {
    likeAnonymousPhoto(input: $input) {
      id
      liked
      likes
    }
  }
`;

export const useToggleLikeMutation = () => {
  const [mutationAnonLike, { data, loading, error }] = useMutation(LIKE_PHOTO);
  return { mutationAnonLike, loading, error, data };
};
