import React, {useState} from "react";
import { StyledFilterBlock,FiltersWrapper,StyledButton } from "./Filter.styled";
import Select from "../Filter1/Select"
import SearchInput from "../Search/SearchInput";
const Filter = ({filters,handleApplyFilter}) =>{



    const onFilterValueChanged= (event) =>{
        const {name,value} = event.target;
       
        handleApplyFilter((prevFilter) =>({...prevFilter,[name]: value}))    
    }

    

    const priceOptions =[
          {label:'All', value:'all'},
          {label:'cheap' ,value:'cheap'},
          {label:'average',value:'average'},
          {label:'expensive',value:'expensive'}
        
    ]
    const nameOptions=[
       
            {label:"All",value:"all"},
            {label:'KENTUCKY BELLE',value:'kentucky belle'},
            {label:'SEAHAWK',value:'seahawk'},
            {label:'WIDER 210',value:'wider 210'},
            {label:'MIMI',value:'mimi'},
            {label:"ND",value:"nd"},
            {label:'DOLLY',value:'dolly'},
            {label:'TAURO',value:'tauro'},
            {label:'MANA',value:'mana'}
       
    ]
    const typeOptions = [
        
            {label:'All',value:'all'},
            {label:'Sailing',value:'sailing'},
            {label:'Motor',value:'motor'}
        


    ]
   
    return(
        
        <StyledFilterBlock>
            <SearchInput searchValue={filters.title} handleSearchValueChanged ={onFilterValueChanged}/>
            <FiltersWrapper>
            <label htmlFor="name-filter">
               <Select
                 id="name-filter"
                 name='name'
                 onChange={onFilterValueChanged}
                 options={nameOptions}
                />
            </label>
            <label htmlFor="type-filter">
                <Select
                    id="type-filter"
                    name='type'
                    onChange={onFilterValueChanged}
                    options={typeOptions}
                />
            </label>
            <label>
                <Select
                    id='price-filter'
                    name='price'
                    onChange={onFilterValueChanged}
                    options={priceOptions}
                />

               
            </label>
            </FiltersWrapper>    
        </StyledFilterBlock>
    )
}

export default Filter