
import {

    SearchOutlined ,
    ShoppingCartOutlined 

} from "@ant-design/icons"

import {IconsWrapper,StyledInput} from "../Search/SearchInput.styled"
import {BrowserRouter as Router, NavLink } from "react-router-dom";

const SearchInput = ({searchValue,handleSearchValueChanged}) =>{


    // const handleInput = (event) =>{
    //     props.onInput(event.target.value)
    // }
     return(
    
        <IconsWrapper>
                <StyledInput
                type="text"
                 placeholder="Search here.."
                 name="title"
                 value ={searchValue}
                 onChange={handleSearchValueChanged}/>
               <SearchOutlined/> 
        </IconsWrapper>
     )
}

export default SearchInput