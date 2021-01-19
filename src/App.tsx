import React from 'react';

import './App.css';
import Calculator from './components/Calculator';
import styled from 'styled-components';


const Container = styled.div`
  align-items:center;
  justify-content:center;
  background: #323232;
  display:flex;
  flex-direction:column;
  min-height: 100vh;
  width:100vw;

`;



function App() {
  return (
    <Container>
      <Calculator/>
    </Container>
  );
}

export default App;
