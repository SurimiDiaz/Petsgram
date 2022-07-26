import React from 'react';
import { photos} from "../../../api/db.json"
import { PhotoCard } from '../PhotoCard';
export const ListOfPhotoCard = () => {
  return (
    <ul>
      {
        photos.map((photo)=>{
          return (
            <li key={photo.id}>
              {
               <PhotoCard {...photo}/>
              }
            </li>
          )
        })
      }
    </ul>
  );
};

 