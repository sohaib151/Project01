import React,{useState,useEffect} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import { Col, Row, Image, ListGroup, Card ,Form ,Button} from 'react-bootstrap'
import Rating from '../components/Rating'
import {listProductDetails}from '../actions/productActions'
import Loader from '../components/Loader'
import Message from '../components/Message'
// import products from '../products'
// import axios from 'axios'

const ProductScreen = () => {
    const { id } = useParams()
    // const product = products.find((p) => p._id === id)
    // const[product,setProduct]=useState({})
    const[qty,setQty]=useState(1)
    const productDetails=useSelector((state)=>state.productDetails)
    const{loading,error,product}=productDetails
       const dispatch=useDispatch()
       const navigate=useNavigate()
    useEffect(()=>{
        // const fetchProduct=async(req,res)=>{
        //     const{data}= await axios.get(`/api/products/${id}`)
        //     setProduct(data)
        // }
        // fetchProduct()
        dispatch(listProductDetails(id))
    },[dispatch,id])
     const addToCartHandler=()=>{
      navigate(`/cart/${id}?qty=${qty}`)
     }
    
    return (
        <>
            <Link to='/' className='btn btn-block bg-light my-3'>Go Back</Link>
                {loading ? <Loader/> : error ? <Message>{error}</Message> : 
            <Row>
                <Col md={4}>
                    <Image src={product.image} alt={product.name} fluid />
                </Col>
                <Col md={3}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item><h3>{product.name}</h3></ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                        </ListGroup.Item>
                        <ListGroup.Item><strong>Price: £{product.price}</strong></ListGroup.Item>
                        <ListGroup.Item>{product.description}</ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Price</Col>
                                    <Col><strong>£ {product.price}</strong></Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Status</Col>
                                    <Col>{product.countInStock>0 ? 'InStock' : 'Out Of Stock'}</Col>
                                </Row>
                            </ListGroup.Item>
                            {product.countInStock > 0 && (
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Qty</Col>
                                        <Col>
                                        <Form.Control as='select' value={qty} onChange={((e)=>setQty(e.target.value))}>
                                            {[...Array(product.countInStock).keys()].map(x=>(
                                                <option key={x + 1} value={x+1}>{x+1}</option>
                                            ))}
                                        </Form.Control> 
                                         </Col>
                                    </Row>
                                </ListGroup.Item>
                            )}
                            <ListGroup.Item className="d-grid gap-2">
                                <Button className='btn-block' variant='dark' type='button' disabled={product.countInStock===0} onClick={addToCartHandler}>Add To Cart</Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
             
            </Row>
}
        </>
    )
}

export default ProductScreen