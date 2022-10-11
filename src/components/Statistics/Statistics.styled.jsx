
import styled from 'styled-components';
export const StatisticsTitle = styled.h2`
display: flex;
align-items: center;
justify-content: center;
height: 100px;
color: grey;
font-size: 32px;` 

export const StatisticsItemArea = styled.ul`
display: flex; 
justify-content: space-around;
align-items: center;
` 
export const StatisticsText = styled.li`
padding: 10px;
background-color: ${ramdomColor};
width: 20%;
color:white;
text-align: center;
`
function ramdomColor (){return'#'+Math.floor(Math.random()*16777215).toString(16)}
   



