import React, { useState } from "react";
import Ship1 from "../../Icons/sh1.webp"
import Ship2 from "../../Icons/sh2.webp"
import Ship3 from "../../Icons/sh3.webp"
import Ship4 from "../../Icons/sh4.webp"
import Ship5 from "../../Icons/sh5.webp"
import Ship6 from "../../Icons/sh6.webp"
import Ship7 from "../../Icons/sh7.webp"
import Ship8 from "../../Icons/sh8.webp"
import Filter from "../Filter1/Fiter";
import MainCatalog from "../MainCatalog1/MainCatalog";
import SearchInput from "../../containers/Search/SearchInput"
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
          text: "Westport",
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
          text: "Benetti",
          image: Ship4,
          price: 27500000,
          type:'motor'
        },
        {
          id:5,
          title: "ND",
          text: "Wider",
          image: Ship5,
          price: 385000000,
          type:'motor'
        },
        {
          id:6,
          title: "DOLLY",
          text: "Benetti",
          image: Ship6,
          price: 52500000,
          type:'sailing'
        },
        {
          id:7,
          title: "TAURO",
          text: "Horizon",
          image: Ship7,
          price: 30000000,
          type:'sailing'
        },
        {
          id:8,
          title: "MANA",
          text: "Horizon",
          image: Ship8,
          price: 17500000,
          type:'motor'
        }
  ];

  export function getShips(){
    return initialShips
  }
const Catalog = ()=>{

      const [filters,setFilters] = useState({title:'',price:'all',type:'all',name:'all'})
      const handleApplyFilter = (newFilters)=>{
            setFilters(newFilters);
      }
     
      return(
            <div>
                 <Filter filters={filters} handleApplyFilter = {handleApplyFilter}/> 
                
                 <MainCatalog filters={filters} shipsList ={initialShips} />
            </div>
      )

      }
export default Catalog

 