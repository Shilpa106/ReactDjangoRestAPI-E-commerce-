import React from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap'

function Header() {
  return (
    <div>
        <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#">S.P.Y</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/"><i className="fas fa-home"></i>Home</Nav.Link>
            <Nav.Link href="/"><i className="fas fa-shopping-cart"></i> Cart</Nav.Link>
            <Nav.Link href="/"><i className="fas fa-user"></i>Login</Nav.Link>
            
            
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
        
    </div>
  )
}

export default Header

