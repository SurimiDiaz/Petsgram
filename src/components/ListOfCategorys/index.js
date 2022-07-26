import React from "react";
import { Category } from "../Category";
import { List, Item } from "./styles";
import {categories} from "../../../api/db.json"

export const ListofCategorys = (props) => {
 
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