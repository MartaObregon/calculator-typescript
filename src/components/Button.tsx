
import React from 'react'
import styled from 'styled-components';

export enum ButtonType {
    Numerical,
    Operational,
}

type Props ={
    label:string;
    position?: [x:number, y:number];
    width?: number;
    height?: number;
    type?: ButtonType;
}

const StyledButton = styled.button`
  background: #727171;
  color: white;
  border-radius:8px;
  border:none;
  font-size:24px;
  
`;


const Button: React.FC<Props> = ({ type = ButtonType.Operational , height, label, position, width}) =>{

    const styles: React.CSSProperties = {};
    if(position){
        styles.gridColumnStart = position[0] + 1 ;
        styles.gridRowStart = position[1] + 1;
    }
    if(width){
        styles.gridColumnEnd = `span ${width}`
    }
    if(height){
        styles.gridRowEnd = `span ${height}`
    }
    if(type === ButtonType.Numerical){
        styles.color = '#000';
        styles.background = '#e48900'
    }

    return (
        
        <StyledButton style= {styles}>{label}</StyledButton>
        
    )
}

export default Button
