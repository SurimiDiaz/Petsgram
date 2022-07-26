import React, {useState, useEffect} from "react";
import { Category } from "../Category";
import { List, Item } from "./styles";

const axios = require('axios').default;

export const ListofCategorys = (props) => {
   const [categories, setCategories] = useState([])


useEffect(()=>{
  const axiosData = async()=>{
try {
  const categoriesFromAxios = await axios.get("https://petgram-server-surimi-surimidiaz.vercel.app/categories")
setCategories(categoriesFromAxios.data) 


} catch (error) {
  console.error(error)
}
  } 
axiosData()
}, [] )

 
 
  return (
    <List>
      {
        categories.map((e)=>{
          return (
            <Item key={e.id}>
              <Category {...e}/>
            </Item>
          )
        })
      }
    </List>

  );
};