import { Navbar, Container } from 'react-bootstrap';
import styled from '@emotion/styled';

let StyledNavContainer = styled.div`
  margin-bottom: 25px;
`
let StyledNavBrand = styled.div`
  color: white;
`

function Navigation() {
  return (
    <StyledNavContainer>
      <Navbar bg="dark">
        <Container>
          <Navbar.Brand href="#">
            <StyledNavBrand>JuWanna Darts</StyledNavBrand>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </StyledNavContainer>
  );
}

export default Navigation;
