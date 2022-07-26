import React from "react";
import { GlobalStyle } from "./GlobalStyles";
import { ListofCategorys } from "./components/ListOfCategorys";
import { ListOfPhotoCard } from "./components/ListOfPhotoCard";

export const App = () => {
  return (
    <div>
      <div>
        <h1>KIOBOLE mi abrilin miamor</h1>
        
      </div>
      <div>
        <GlobalStyle/>
        <ListofCategorys />
        <ListOfPhotoCard/>
      </div>
    </div>
  );
};
