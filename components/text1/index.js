import styled from "@emotion/styled";
import React from 'react';

const SmallText = styled.div`
    display:flex;
    justify-content:  center;
    align-items :center;
    text-align: center;
    color: #A9ADC0;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 32px;  
    @media(min-width:640px){
        font-size: 20px;
    
    }
}
`;
const BigText =styled.div` 
display :flex; 
justify-content:  center;
align-items: center;
text-align:  center;
color: #A9ADC0;
font-style: normal;
font-weight: 700;
font-size: 15px;
line-height: 32px;
@media(min-width:640px){
    font-size: 30px;

}
`;
const Highlight  = styled.div`
    margin-left:5px;
    text-transform: uppercase;
    color: #FFFFFF;
    background: #00AB84;
    border-radius: 10px; 
`;

export function  Text (){
    return (
        <>
        <SmallText>IT салбарт хайртай оюутан та </SmallText>
        <BigText>МАНАЙ HACKUM КЛУБТЭЙ 
         <Highlight> НЭГДСЭНЭЭР</Highlight> 
        </BigText>
        </>
    )
}
export default Text;
