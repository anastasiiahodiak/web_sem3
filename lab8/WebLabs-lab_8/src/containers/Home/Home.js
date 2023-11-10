import React, { useEffect, useState } from "react";
import Ship1 from "../../Icons/sh1.webp"
import Ship2 from "../../Icons/sh2.webp"
import Ship3 from "../../Icons/sh3.webp"
import Ship4 from "../../Icons/sh4.webp"
import Ship5 from "../../Icons/sh5.webp"
import Ship6 from "../../Icons/sh6.webp"
import Ship7 from "../../Icons/sh7.webp"
import Ship8 from "../../Icons/sh8.webp"
import {
    StyledButton,
    StyledText,
    MainWrapper,
    CardWrapper,
    ButtonWrapper
} from "./Home.styled"
import { Button } from "antd";
import CardItem from "../../components/CardItem";
import { FontSizeOutlined } from "@ant-design/icons";

const homeText = {
  text:`For aspiring yacht owners looking for a luxury 
        yacht for sale, we have put together a fine 
        selection of luxury yachts and megayachts for 
       sale from all over the world.`
};
 

const initialShips =[
  {   id:1,
      title: "KENTUCKY BELLE",
      text: "Horizon",
      image:Ship1 ,
      price: 1999000,
      type : 'motor'
    },
    {
      id:2,
      title: "SEAHAWK",
      text: "Westport  ",
      image: Ship2,
      price: 10250000,
      type: 'sailing'
    },
    {
      id:3,
      title: "WIDER 210",
      text: "Wider",
      image: Ship3,
      price: 62400000,
      type:'motor'
    },
    {
      id:4,
      title: "MIMI",
      text: "Benetti ",
      image: Ship4,
      price: 27500000,
      type:'motor'
    },
    {
      id:5,
      title: "ND",
      text: "Wider ",
      image: Ship5,
      price: 385000000,
      type:'motor'
    },
    {
      id:6,
      title: "DOLLY",
      text: "Benetti ",
      image: Ship6,
      price: 52500000,
      type:'sailing'
    },
    {
      id:7,
      title: "TAURO",
      text: "Horizon ",
      image: Ship7,
      price: 30000000,
      type:'sailing'
    },
    {
      id:8,
      title: "MANA",
      text: "Horizon ",
      image: Ship8,
      price: 17500000,
      type:'motor'
    }

  ]
const Home = () =>{
    const [isVisible, setIsVisible] = useState(false)
    const [countOfShown, setCountOfShown] = useState(4);
    const [viewMore, setViewMore] = useState('View more')
    function viewMoreShips() {
      const newCount = countOfShown === 4 ? 8 : 4;
      const newLabel = countOfShown === 4 ? 'View less' : 'View more';
      setCountOfShown(newCount);
      setViewMore(newLabel);
  }

   
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
           
             {initialShips.slice(0, countOfShown).map((ship)=>(
            <CardItem 
              id ={ship.id}
              key={ship.id}
              title={ship.title}
              text={ship.text}
              image = {ship.image}
              price={ship.price}
             
            />
      ))}
            </CardWrapper>
            <ButtonWrapper>
            <Button onClick={viewMoreShips} style={{width:150,height:40, fontSize:20}}>
                 {viewMore}
           </Button>
            </ButtonWrapper>
           
        </div>
    )
}
export default Home;