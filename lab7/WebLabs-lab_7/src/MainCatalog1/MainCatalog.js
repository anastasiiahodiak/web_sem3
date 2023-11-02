import React from "react";
import Ship1 from "../../src/Icons/sh1.webp"
import Ship2 from "../../src/Icons/sh2.webp"
import Ship3 from "../../src/Icons/sh3.webp"
import Ship4 from "../../src/Icons/sh4.webp"
import CardItem from "../components/CardItem";
import { useState } from "react";


import { CardWrapper } from "../containers/Home/Home.styled";


const ships =[
     {
       title: "KENTUCKY BELLE",
       text: "Horizon",
       image:Ship1 ,
       price: 1999000,
     },
     {
       title: "SEAHAWK",
       text: "Westport  ",
       image: Ship2,
       price: 10250000,
     },
     {
       title: "WIDER 210",
       text: "Wider",
       image: Ship3,
       price: 62400000,
      },
      {
        title: "MIMI",
        text: "Benetti ",
        image: Ship4,
        price: 27500000,
      },
     
];
const MainCatalog = ()=>{
      const [cards,setCards] = useState(ships)
      
      return(
        <CardWrapper>
        {cards.map(({title,image,text,price},idx)=>(
            <CardItem 
              key={idx}
              title={title}
              text={text}
              image = {image}
              price={price}
              idx={idx}
            />
      ))}
      </CardWrapper>
      )
      
}

export default MainCatalog