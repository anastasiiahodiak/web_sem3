import React from "react";
import {Card,Button} from "antd";
import {Footer} from "./CardItem.styled"
const { Meta } = Card;

const CardItem = ({title ,text,image, price}) =>(
    <Card
        hoverable 
        cover = {
            <img style={{width:300, height: 200}} src = {image}/>
        }
        style={{width:300}}
    >
    <Meta  title={title} description = {text}/>
    <Footer>
        <p style={{marginTop:10}}>${price}</p>
        <Button>Detail</Button>
    </Footer>
    </Card>
)
export default CardItem;