import React from "react";
import {BrowserRouter as Router, NavLink,Route,Routes} from "react-router-dom";
import { LinkingWrapper } from "./Navigation.styled";
import Home from "../Home/Home";
import Catalog from "../Catalog1/Catalog";
const Navigation = () =>{
    return(
   <Router>
    <LinkingWrapper>
    <ul>
        <li>
            <NavLink  to ='/' >Home</NavLink>
        </li>
        <li>
            <NavLink  to = "/catalog">Catalog</NavLink>
        </li>
        <li>
            <NavLink  to="/cart">Cart</NavLink>
        </li>
       
    </ul>
    <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/catalog" element ={<Catalog/>}/>
        <Route path="/cart" element ={<div>This is a support block</div>}/>
       
    </Routes>
    </LinkingWrapper>
   </Router>
    )
}
  
export default Navigation;

