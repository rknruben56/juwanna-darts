import { Navbar, Container } from 'react-bootstrap';
import styled from '@emotion/styled';

let NavContainer = styled.div`
  margin-bottom: 25px;
`
let StyledBrand = styled.div`
  color: white;
`

function Navigation() {
  return (
    <NavContainer>
      <Navbar bg="dark">
        <Container>
          <Navbar.Brand href="#">
            <StyledBrand>
              JuWanna Darts
            </StyledBrand>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </NavContainer>
  );
}

export default Navigation;