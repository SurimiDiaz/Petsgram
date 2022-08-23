import React, { useState, useEffect } from "react";
import { Category } from "../Category";
import { List, Item } from "./styles";

const axios = require("axios").default;

const useCategoriesData = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const axiosData = async () => {
      try {
        const categoriesFromAxios = await axios.get(
          "https://petgram-server-surimi-surimidiaz.vercel.app/categories"
        );
        setCategories(categoriesFromAxios.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    axiosData();
  }, []);
  return { categories, loading };
};

export const ListofCategorys = (props) => {
  const { categories, loading } = useCategoriesData();

  const [showFixed, setShowFixed] = useState(false);

  useEffect(() => {
    const onScroll = (e) => {
      const newShowFixed = window.scrollY > 200;
      showFixed !== newShowFixed && setShowFixed(newShowFixed);
    };

    document.addEventListener("scroll", onScroll);
    return () => document.removeEventListener("scroll", onScroll);
  }, [showFixed]);

  const renderList = (fixed) => {
    return (
      <List fixed={fixed}>
        {categories.map((e) => {
          return (
            <Item key={e.id}>
              <Category {...e} path={`/pet/${e.id}`} />
            </Item>
          );
        })}
      </List>
    );
  };
  if (loading) {
    return "cargando...";
  }
  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  );
};
