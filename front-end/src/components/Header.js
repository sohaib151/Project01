import React from 'react'
import {useSelector}from 'react-redux'
import {BsCart4} from 'react-icons/bs'
import{FaUserAlt} from 'react-icons/fa'
import {Container,Nav,Navbar} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'


const Header = () => {
  const cart=useSelector(state=>state.cart)
const{cartItems}=cart
  return (
    <>
     
    <Navbar bg="success" expand="lg">
      <Container>
        <LinkContainer to='/'>
        <Navbar.Brand>SK Collection</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ml-auto my-2 "
            style={{ maxHeight: '100px' ,marginLeft:'auto'}}
            navbarScroll
          >
            <LinkContainer to='/cart'>
            <Nav.Link>{cartItems.reduce((acc,cur)=> acc + cur.qty ,0)}<BsCart4 className='cart__icon'/></Nav.Link>
            </LinkContainer>
            <LinkContainer to='/login'>
            <Nav.Link><FaUserAlt className='cart__icon'/>Log In</Nav.Link>
            </LinkContainer>
          </Nav>
         
        </Navbar.Collapse>
        </Container>
    </Navbar>
    
  
    
    </>
  )
}

export default Header