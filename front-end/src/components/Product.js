import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import {Link} from 'react-router-dom'
const Product = ({ product }) => {
  return (
    <>
      <Card className='my-3 p-3 rounded'>
        <Link to={`/product/${product._id}`}>
          <Card.Img src={product.image} variant='top' />
        </Link>
        <Card.Body>
          <Link to={`/product/${product._id}`} style={{ color: 'black' }}>
            <Card.Title as='div'>
              {product.name}
            </Card.Title>
          </Link>
          <Rating value={product.rating} text={`${product.numReviews} Reviews`}/>
          <Card.Text as='h3'>£{product.price}</Card.Text>
        </Card.Body>
      </Card>
    </>
  )
}

export default Product