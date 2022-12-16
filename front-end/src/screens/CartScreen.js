import React, { useEffect } from 'react'
import { Link, useLocation, useParams ,useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart ,cartRemoveItem} from '../actions/cartActions'
import { Row, Col, ListGroup,Image,Form, Button, Card } from 'react-bootstrap'
import Message from '../components/Message'
const CartScreen = () => {

  const dispatch = useDispatch()
  const navigate=useNavigate()
  const { id } = useParams()
  const location = useLocation()
  const qty = location.search ? Number(location.search.split('=')[1]) : 1
  const productId = id
  const cart = useSelector(state => state.cart)
  const { cartItems } = cart

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty))
    }
  }, [dispatch, productId, qty])

  const removeFromCartHandler=(id)=>{
    dispatch(cartRemoveItem(id))
  }
  const proceedToCheckout=()=>{
    navigate('/login?redirect=/shopping')
  }
  return (
    <>
      <h1>Sopping Cart</h1>
      <Row>
        <Col md={8}>
          {cartItems.length === 0 ? <Message>your cart is empty <Link to='/'>Go Back</Link></Message> :
            <ListGroup variant='flush'>
              {cartItems.map(item =>
                <ListGroup.Item key={item.product}>
                  <Row>
                    <Col md={2}><Image src={item.image} fluid rounded/></Col>
                    <Col md={3}><Link to={`/product/${item.product}`}>{item.name}</Link></Col>
                    <Col>£{item.price}</Col>
                    <Col md={2}>
                      <Form.Control as='select' value={item.qty} onChange={(e)=>dispatch(addToCart(item.product,Number(e.target.value)))}>
                        {[...Array(item.countInStock).keys()].map(x=>
                          <option key={x + 1} value={x + 1}>{x+1}</option>
                          )}
                      </Form.Control>
                    </Col>
                    <Col><Button type='button' variant='light' onClick={()=>removeFromCartHandler(item.product)}><i className='fas fa-trash'></i></Button></Col>
                  </Row>
                </ListGroup.Item>
              )}
             </ListGroup>
          }
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant='flush'>
             <ListGroup.Item>
              <h3>Subtotal ({cartItems.reduce((acc,item)=>acc + item.qty,0)}) Item</h3>
              £{cartItems.reduce((acc,item)=> acc + item.qty*item.price,0).toFixed(2)}
             </ListGroup.Item>
             <ListGroup.Item className="d-grid gap-2">
              <Button type='button' variant='dark' onClick={proceedToCheckout}>Proceed To Checkout</Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default CartScreen