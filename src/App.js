import React from "react";
import { GlobalStyle } from "./GlobalStyles";
import { ListofCategorys } from "./components/ListOfCategorys";

export const App = () => {
  return (
    <div>
      <div>
        <h1>KIOBOLE mi abrilin miamor</h1>
        
      </div>
      <div>
        <GlobalStyle/>
        <ListofCategorys />
      </div>
    </div>
  );
};
