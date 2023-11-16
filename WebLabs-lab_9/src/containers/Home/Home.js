import React, { useEffect, useState } from "react";
import {
    StyledButton,
    StyledText,
    MainWrapper,
    CardWrapper,
    ButtonWrapper
} from "./Home.styled"
import { Button } from "antd";
import CardItem from "../../components/CardItem";
import { getShips } from "../../service/api";
import Loader from "../Loader/Loader";

const homeText = {
  text:`For aspiring yacht owners looking for a luxury 
  yacht for sale, we have put together a fine 
  selection of luxury yachts and megayachts for 
 sale from all over the world.`
};
 
const initialShips = []
const Home = () =>{
    const [ships,setShips ] = useState([]);
    const [countOfShown, setCountOfShown] = useState(4);
    const [viewMore, setViewMore] = useState('View more');
    const [isLoading,setIsLoading] =useState(false)
    function viewMoreShips() {
      const newCount = countOfShown === 4 ? 8 : 4;
      const newLabel = countOfShown === 4 ? 'View less' : 'View more';
      setCountOfShown(newCount);
      setViewMore(newLabel);
  }

  useEffect(()=>{
    setIsLoading(true)
    getShips().then(ships =>{
        setShips(ships);
        setIsLoading(false);
    })
      

  },[])

   
    return(
        <div>
            <MainWrapper >
                <StyledText>
                  <p>{homeText.text}</p>
                  <StyledButton>
                    Detail
                </StyledButton>
                </StyledText>
            </MainWrapper>
            <CardWrapper>
            <div style={{ width: '90%', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                {isLoading?<Loader/>:""}
                {Array.isArray(ships) && ships.slice(0, countOfShown).map((ship) => (
               <CardItem 
                 id ={ship.id}
                 key={ship.id}
                 title={ship.title}
                 text={ship.text}
                 image = {ship.image}
                 price={ship.price}
               />
         ))}
            </div>
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