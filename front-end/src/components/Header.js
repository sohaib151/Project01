import React from 'react'
import {Container,Nav,Navbar} from 'react-bootstrap'
const Header = () => {
  return (
    <>
     
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ml-auto my-2 "
            style={{ maxHeight: '100px' ,marginLeft:'auto'}}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
          </Nav>
         
        </Navbar.Collapse>
        </Container>
    </Navbar>
    
   
    
    </>
  )
}

export default Header