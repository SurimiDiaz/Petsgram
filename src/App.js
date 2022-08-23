import React, { useState } from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import { ListofCategorys } from "./components/ListOfCategorys";
import { ListOfPhotoCardsComponent } from "./components/ListOfPhotoCard";
import { Logo } from "./components/Logo";
import { NavBar } from "./components/NavBar";
import { Routes, Route } from "react-router-dom";

import Detail from "./pages/Detail";
import Home from "./pages/Home";
import Favs from "./pages/Favs";
import NotRegisterUser from "./pages/NotRegisterUser";
import User from "./pages/User";

export const App = () => {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <div>
      <div>
        <GlobalStyle />

        <Logo />

        <ListofCategorys />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pet/:id" element={<ListOfPhotoCardsComponent />} />
          <Route path="/photos/:id" element={<Detail />} />
          <Route
            path="/favs"
            element={isLogged ? <Favs /> : <NotRegisterUser />}
          />
          <Route
            path="/user"
            element={isLogged ? <User /> : <NotRegisterUser />}
          />
        </Routes>
      </div>
      <NavBar />
    </div>
  );
};
