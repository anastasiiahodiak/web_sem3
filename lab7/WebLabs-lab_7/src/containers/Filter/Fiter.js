import React from "react";
import { StyledFilterBlock,FiltersWrapper,StyledButton } from "./Filter.styled";
import {  StyledSelect } from "./Filter.styled";

const Filter = () =>{
    return(
        <StyledFilterBlock>
            <FiltersWrapper>
               <StyledSelect
                 
                 value="Filter1" 
                
                 dropdownRender={()=>(
                    <div>
                        Filter1
                        Filter2
                        Filter3
                    </div>
               )}
                />
                  
               <StyledSelect value="Filter2" dropdownRender={()=>(
                    <div>
                        Filter1
                        Filter2
                        Filter3
                    </div>
               )}/>
               
               <StyledSelect value="Filter3" 
               dropdownRender={()=>(
                <div>
                    Filter1
                    Filter2
                    Filter3
                </div>
           )}/>
            </FiltersWrapper>
           
            <StyledButton>
                Apply
            </StyledButton>
            
        </StyledFilterBlock>
    )
}

export default Filter