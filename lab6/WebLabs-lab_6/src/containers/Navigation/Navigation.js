import React from "react";
import {BrowserRouter as Router, NavLink,Route,Routes} from "react-router-dom";
import { LinkingWrapper } from "./Navigation.styled";
import Home from "../Home/Home";
const Navigation = () =>{
    return(
   <Router>
    <LinkingWrapper>
    <ul>
        <li>
            <NavLink  to ='/' >Home</NavLink>
        </li>
        <li>
            <NavLink  to = "/shop">Shop</NavLink>
        </li>
        <li>
            <NavLink  to="/support">Support</NavLink>
        </li>
        <li>
            <NavLink  to ="/contacts">Contacts</NavLink>
        </li>
    </ul>
    <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/shop" element ={<div>This is a shop block</div>}/>
        <Route path="/support" element ={<div>This is a support block</div>}/>
        <Route path="/contacts" element ={<div>This is a contacts block</div>}/>
    </Routes>
    </LinkingWrapper>
   </Router>
    )
}
  
export default Navigation;

