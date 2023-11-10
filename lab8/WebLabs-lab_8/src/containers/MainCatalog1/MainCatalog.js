import React from "react";
import CardItem from "../../components/CardItem";
import { useState} from "react";
import { useEffect } from "react";
import { CardWrapper } from "../../containers/Home/Home.styled";



const MainCatalog = ({filters,shipsList})=>{
     
     const [filteredShips,setFilteredShips] = useState(shipsList);
     
     useEffect(()=>{

      const filteredItems = shipsList.filter((item)=>{
           
            return(
              (item.title.toLowerCase().includes(filters.title.toLowerCase()))&&
              (filters.name === 'all' || item.title.toLowerCase().includes( filters.name.toLowerCase()))&&
                    ((filters.price === 'all') ||
                    (filters.price === 'cheap'&& item.price<2000000)||
                    (filters.price === 'average' && item.price>2000000 && item.price<30000000)||
                    (filters.price ==='expensive' && item.price >30000000)) &&
              (filters.type === 'all' || item.type === filters.type)
            );
          });
          setFilteredShips(filteredItems)

         },[filters])
        return(
        <CardWrapper>
        {filteredShips.map((ship)=>(
            <CardItem 
              id ={ship.id}
              key={ship.id}
              title={ship.title}
              text={ship.text}
              image = {ship.image}
              price={ship.price}
             
            />
      ))}
      </CardWrapper>)
}
  
export default MainCatalog