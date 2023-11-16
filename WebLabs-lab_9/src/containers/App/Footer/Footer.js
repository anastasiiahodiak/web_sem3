import React from "react";
import Icon,  {
    ThunderboltOutlined,
    TwitterOutlined ,
    WhatsAppOutlined,
    InstagramOutlined ,
} from "@ant-design/icons"
import { Wrapper,LogoWrapper,IconBase,VerticalLine,StyledText } from "./Footer.styled";
import { IconsWrapper } from "./Footer.styled";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

const Footer= ()=>{
    return(
        <Wrapper>
            <LogoWrapper>
                <ThunderboltOutlined/>
                <p>Ships Shop</p>
            </LogoWrapper>
            <VerticalLine/>
            <IconsWrapper>
                <Router>
                <NavLink><IconBase component={TwitterOutlined} color='#3385ff'/></NavLink>
                <NavLink> <IconBase component={WhatsAppOutlined} color="#009933"/></NavLink>
               <NavLink> <IconBase component={InstagramOutlined} color="#cc3399"/></NavLink>
               
                </Router>
            </IconsWrapper>
            <VerticalLine/>
            <StyledText>
                <p>Ships Shop all rights reserved</p>
            </StyledText>
        </Wrapper>
    )
}
export default Footer;