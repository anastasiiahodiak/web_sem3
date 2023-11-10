import React from "react";
import styled from  "styled-components";
import Icon from "@ant-design/icons/lib/components/Icon";

export const Wrapper = styled.div`
     display:flex;
     flex-direction: column;
     align-items:center;
     margin-top:50px

     
`
export const LogoWrapper=styled.div`
    display:flex;
    span{
       font-size:24px
    }
    p{
        font-size:24px
    }
`
export const IconBase=styled(Icon)`
 color: ${(color)=>color};
`
export const VerticalLine = styled.hr`
     
      width:80%;
      border-bottom: none;
      border-top: 2px solid #EFEFF4;
  `;

export const IconsWrapper = styled.div`
    margin:12px 0;
    display:flex;
    a{
        padding: 0 12px
    }
    
`
export const StyledText = styled.p`
 font-size:12px
`