import React from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import { ListofCategorys } from "./components/ListOfCategorys";
import { ListOfPhotoCardsComponent } from "./components/ListOfPhotoCard";
import { Logo } from "./components/Logo";
import { PhotoDetail } from "./components/PhotoDetail";
import { Routes, Route, Link } from "react-router-dom";

export const App = () => {
  return (
    <div>
      <div>
        <GlobalStyle />
        <Link to="/">
          <Logo />
        </Link>
        <ListofCategorys />
        <Routes>
          <Route
            path="/"
            element={<ListOfPhotoCardsComponent categoryId={2} />}
          />
          <Route path="/photos/:id" element={<PhotoDetail />} />
        </Routes>
      </div>
    </div>
  );
};
