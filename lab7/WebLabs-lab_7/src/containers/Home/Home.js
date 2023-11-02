import React from "react";
import Ship1 from "../../Icons/sh1.webp";
import Ship2 from "../../Icons/sh2.webp";
import Ship3 from "../../Icons/sh3.webp"
import {
    StyledButton,
    StyledText,
    MainWrapper,
    CardWrapper
} from "./Home.styled"
import CardItem from "../../components/CardItem";
const homeText = {
  text:`For aspiring yacht owners looking for a luxury 
        yacht for sale, we have put together a fine 
        selection of luxury yachts and megayachts for 
        sale from all over the world.`
};
 


const data = [
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
  ];
const Home = () =>{
    return(
        <div>
            <MainWrapper>
                <StyledText>
                  <p>{homeText.text}</p>
                  <StyledButton>
                    Detail
                </StyledButton>
                </StyledText>
            </MainWrapper>
            <CardWrapper>
           
             {data.map(({title,text,image,price},idx)=>(
                <CardItem
                    key= {idx}
                    title={title}
                    text = {text}
                    image= {image}
                    price={price}
                    id={idx}
                />
                   
             ))}
            </CardWrapper>
        </div>
    )
}
export default Home;