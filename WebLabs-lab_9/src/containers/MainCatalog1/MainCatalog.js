import React from "react";
import CardItem from "../../components/CardItem";
import { useState, useEffect } from "react";
import { CardWrapper } from "../Home/Home.styled";
import { getShips, getFilteredShips } from "../../service/api";
import Loader from "../Loader/Loader"
import { Button } from "antd";

const MainCatalog = ({ filters, shipsList }) => {
  const [filteredShips, setFilteredShips] = useState(shipsList);
  const [isLoading,setIsLoading] = useState(false)
  const [filtersApplied,setFiltersApplied] = useState(true)

  const handleFiltersApply= ()=>{
        setFiltersApplied(true)
  }
  useEffect(() => {
   
    const fetchFilteredShips = async () => {
      try {
        const result = await getFilteredShips(filters);
        setFilteredShips(result);
        setFiltersApplied(false)
      } catch (error) {
        console.error("Error fetching filtered ships:", error);
      }
    };

    if (filtersApplied) {
      fetchFilteredShips();
      setFiltersApplied(false)
    }
  }, [filters,filtersApplied]);



  return (
    
    <div >
      <div style={{display:"flex" ,justifyContent:"center",marginTop:50}}>
        <Button onClick={handleFiltersApply}>Apply and Search</Button>
      </div>
   
      <CardWrapper>  
        <div style={{ width: '90%', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          {isLoading ?<Loader/>:""}
          {filteredShips.map((ship) => (
            <CardItem
              id={ship.id}
              key={ship.id}
              title={ship.title}
              text={ship.text}
              image={ship.imageUrl}
              price={ship.price}
            />
          ))}
        </div>
      </CardWrapper>  
    </div>
  );
};

export default MainCatalog;
         