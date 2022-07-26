import React from "react";
import { Category } from "../Category";
import { List, Item } from "./styles";

export const ListofCategorys = (props) => {
  const moked = [1,2,3,4]
  return (
    <List>
      {
        moked.map((e)=>{
          return (
            <Item key={e}>
              <Category/>
            </Item>
          )
        })
      }
    </List>

  );
};