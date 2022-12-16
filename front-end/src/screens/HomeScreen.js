import React ,{useEffect}from 'react'
import {useDispatch,useSelector} from 'react-redux'
// import products from '../products'
// import axios from 'axios'
import { Row,Col } from 'react-bootstrap'
import Product from '../components/Product'
import {listProducts} from '../actions/productActions'
import Loader from '../components/Loader'
import Message from '../components/Message'
 

const HomeScreen = () => {
    //  const[products,setProducts]=useState([])
    const productList=useSelector(state=>state.productList)
    const {loading,error,products}=productList
       const dispatch=useDispatch()
     useEffect(()=>{

      // const fetchProucts=async(req,res)=>{
      //   const{data}=await axios.get('/api/products')

      //   setProducts(data)
      // }
      // fetchProucts()
      dispatch(listProducts())
     },[dispatch])
     
  return (
    <>
    <h1 className='my-3'>Latest Products</h1>
    {loading ? <Loader/> : error ? <Message variant='danger'>{error}</Message> :
        <Row >
            {products.map(product=>(
            <Col xs={6} sm={6} md={6} lg={4} xl={3} key={product._id}>
            <Product product={product}/>
            </Col>
             ))}
        </Row>
}
    </>
  )
}

export default HomeScreen