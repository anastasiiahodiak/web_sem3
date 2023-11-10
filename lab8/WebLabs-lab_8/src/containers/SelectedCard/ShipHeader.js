import React from "react";
import { Link } from "react-router-dom";
import { Button} from "antd";
import { ShipHeaderWrapper } from "./ShipHeader.styled";
import  {ArrowLeftOutlined } from "@ant-design/icons";
const ShipHeader =()=>{
      return(
        <ShipHeaderWrapper>
            <Link to ="/catalog" >
                    <ArrowLeftOutlined  style={{ transform: "scale(2)",marginRight:20 }}/>
            </Link>
            <h2>Details of the ship</h2>
        </ShipHeaderWrapper>
      
      )
}

export default ShipHeader