import styled from "@emotion/styled";
const SmallText = styled.div`
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
    padding: 0 8px;
    background: #00AB84;
    border-radius: 10px; 
`;
const Highlight1  = styled.div`
    margin-right:5px;
    text-transform: uppercase;
    color: #FFFFFF;
    padding: 0 8px;
    background: #00AB84;
    border-radius: 10px; 
`;
export function  Text (){
    return (
        <>
        <SmallText>IT салбарт хайртай оюутан та</SmallText>
        <BigText>
        Манай hackum клубтэй
         <Highlight>нэгдсэнээр</Highlight> 
        </BigText>
        <SmallText>Бид хэрхэн </SmallText>
        <BigText>
         <Highlight1>идэвхтэн гишүүдээ </Highlight1> 
         элсүүлэх бэ?
        </BigText>
        </>

    )
}
export default Text;
