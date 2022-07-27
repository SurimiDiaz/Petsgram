import React from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import { ListofCategorys } from "./components/ListOfCategorys";
import { ListOfPhotoCard } from "./components/ListOfPhotoCard";
import { Logo } from "./components/Logo";

export const App = () => {
  return (
    <div>
      <div>
        <GlobalStyle />
        <Logo />
        <ListofCategorys />
        <ListOfPhotoCard />
      </div>
    </div>
  );
};
