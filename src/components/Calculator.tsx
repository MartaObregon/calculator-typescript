import React from 'react'

import styled from 'styled-components';
import Button, {ButtonType} from './Button';


const Container = styled.div`
  /* background: #323232;
  flex:1; */
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns:repeat(4, 80px);
  grid-template-rows:120px repeat(5, 80px);
  grid-gap:10px;

`;


const Display = styled.div`
  align-items: center;
  background: white;
  border-radius:8px;
  justify-content: flex-end;
  display:flex;
  font-size:48px;
  grid-column-end: span 4;
  padding: 0 24px;

`;




const Calculator: React.FC <{}> = () => {
    return (
        <Container>
            
            <Grid>
                <Display>11</Display>
                < Button label="AC" position={[0,1]} width={2}/>
                < Button label="Oops" position={[2,1]} width={2}/>
                < Button label="+" position={[3,2]} />
                < Button label="-" position={[3,3]}/>
                < Button label="=" position={[3,4]} height={2}/>
                < Button type={ButtonType.Numerical} label="9" position={[2,2]}/>
                < Button type={ButtonType.Numerical} label="8" position={[1,2]}/>
                < Button type={ButtonType.Numerical} label="7" position={[0,2]}/>
                < Button type={ButtonType.Numerical} label="6" position={[2,3]}/>
                < Button type={ButtonType.Numerical} label="5" position={[1,3]}/>
                < Button type={ButtonType.Numerical} label="4" position={[0,3]}/>
                < Button type={ButtonType.Numerical} label="3" position={[2,4]}/>
                < Button type={ButtonType.Numerical} label="2" position={[1,4]}/>
                < Button type={ButtonType.Numerical} label="1" position={[0,4]}/>
                < Button type={ButtonType.Numerical} label="0" position={[0,5]} width={3}/>


            </Grid>
        </Container>
    )
}

export default Calculator
