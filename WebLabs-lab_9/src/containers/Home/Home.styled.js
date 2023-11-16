import React from "react";
import styled from "styled-components";
import ShipPicture from "../../Icons/ship2.webp";
import { Button } from 'antd';



export const MainWrapper = styled.div`
   width:100%;
   background-image: url(${ShipPicture}); 
   background-size: cover; // 
   height:600px;
   text-align: right;

`
export const StyledText = styled.div`
padding-top: 70px;
margin-left:50%;
width:600px;
line-height:40px;
font-size: 20px;
h1 {
    font-size: 40px;
    color: white;
}
`

export const StyledButton = styled(Button)`

background: transparent;
border-radius: 20px;
border-color:black;
width:170px;
height:40px;
font-size:18px;
`

export const CardWrapper = styled.div`
  margin-bottom:100px;
  margin-top:100px;
  display:flex;
  width:100%;
  flex-wrap:wrap;
  justify-content:space-around;
`
export const ButtonWrapper = styled.div`
       display:flex;
       justify-content:center;
       align-items:center;
`