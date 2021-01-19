
import React from 'react'
import styled from 'styled-components';


type Props ={
    label:string;
    position?: [x:number, y:number];
    width?: number;
    height?: number;
}

const StyledButton = styled.button`
  background: #e48900;
  width:100%;
  height:100%;
  border-radius:8px;
  border:none;
  font-size:24px;
  
`;


const Button: React.FC<Props> = ({height, label, position, width}) =>{

    const styles: React.CSSProperties = {};
    if(position){
        styles.gridColumnStart = position[0] +1;
        styles.gridRowStart = position[1] +1;
    }
    if(width){
        styles.gridColumnEnd = `span ${width}`
    }
    if(height){
        styles.gridRowEnd = `span ${height}`
    }

    return (
        <div>
            <StyledButton style= {styles}>{label}</StyledButton>
        </div>
    )
}

export default Button
