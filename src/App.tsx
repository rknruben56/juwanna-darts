import React from 'react';
import logo from './logo.svg';
// import './App.css';
import { Navbar, Container } from 'react-bootstrap';
import styled from '@emotion/styled';

let StyledBrand = styled.div`
  color: white;
`

function App() {
  return (
    <>
      <Navbar bg="dark">
        <Container>
          <Navbar.Brand href="#">
            <StyledBrand>
              JuWanna Darts
            </StyledBrand>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
