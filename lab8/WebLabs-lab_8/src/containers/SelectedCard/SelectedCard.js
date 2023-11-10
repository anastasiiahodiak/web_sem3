import React, { useEffect, useState } from "react";
import Meta from "antd/es/card/Meta";
import { SelectedCardWrapper,SelectedImage,SelectedInfo ,ShipContent,ShipTextContent} from "./SelectedCard.styled";
import { Button } from "antd";
import ShipHeader from "./ShipHeader";
import Card from "antd/es/card/Card";
import { useLocation } from "react-router-dom";
import "../SelectedCard/selectedCard.css"
import { getShips } from "../Catalog1/Catalog";
const text =`Westport is designed and built for the American yachtsman.
             Loved by crews for their logical, smart systems layout.
             At 235 gross tonnes, this yacht provides lots of big open
             living spaces.  Designed by Westport and Taylor Olson with
             naval architecture by famed Jack Sarin, her spaces and layout
             are made for comfortable cruising.`

const SelectedCard =()=>{
    const [initialShips,setInitialShips] =useState(getShips)
   
    const location= useLocation()
    const shipId = location.pathname.split('/')[2]
   
    const shipData = initialShips.find(b => b.id === Number(shipId) )
    
  
    return(
       <SelectedCardWrapper>

           <ShipHeader />
           <ShipContent>
                <Card
                    hoverable 
                    cover = {
                        <img style={{width:400, height: 300}} src = {shipData.image}/>
                    }
                    style={{width:400,height:400}}
                    > 
                      <h2 style={{textAlign:'center'}}>
                        {shipData.title}
                      </h2>
              </Card>
              <div>
                    <div className="sel_item_description">
                      <p>{text}</p>
                    </div>
                    <div className="sel_item_price" >
                         <h2>Price: {shipData.price} $ </h2>
                        <Button className="buy">Buy Now</Button>
                    </div>
              </div>
            </ShipContent>
      </SelectedCardWrapper>

    )
}

export default SelectedCard