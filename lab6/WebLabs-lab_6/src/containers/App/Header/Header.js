import React from "react";


import { StyledHeader, IconsWrapper } from "./Header.styled";
import {
    ThunderboltOutlined,
    TwitterOutlined ,
    WhatsAppOutlined,
    InstagramOutlined ,
    SearchOutlined ,
    ShoppingCartOutlined 

} from "@ant-design/icons"
import {BrowserRouter as Router, NavLink } from "react-router-dom";


const Header = ()=>{
    return(
    <StyledHeader title = "Ships shop">
        <div>
            <IconsWrapper>
                <ThunderboltOutlined/>
                <p>Ships shop</p>
            </IconsWrapper>
        </div>
        <div>
            <IconsWrapper>
               <Router>
                <NavLink><TwitterOutlined/></NavLink>
                <NavLink><WhatsAppOutlined/></NavLink>
                <NavLink><InstagramOutlined/></NavLink>
                </Router>
            </IconsWrapper>
        </div>
        <div>
            <IconsWrapper>
                <Router>
                <NavLink> <SearchOutlined/></NavLink>
                <NavLink> <ShoppingCartOutlined/></NavLink> 
                </Router>      
            </IconsWrapper>
        </div>
    </StyledHeader>
    )
}
export default Header;