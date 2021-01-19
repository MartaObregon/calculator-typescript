
import React from 'react'
import styled from 'styled-components';


type Props ={
    label:string;
}

const StyledButton = styled.button`
  background: #e48900;
  width:100%;
  height:100%;
  border-radius:8px;
  border:none;
  font-size:24px;
  
`;


const Button: React.FC<Props> = ({label}) =>{
    return (
        <div>
            <StyledButton>{label}</StyledButton>
        </div>
    )
}

export default Button
