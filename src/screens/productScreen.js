import React, { useEffect, useState } from 'react'
import './productScreen.css'
import {useSelector,useDispatch} from 'react-redux'
import LoadingBox from '../components/LoadingBox'
import ErrorBox from '../components/ErrorBox'
import { detailsProduct } from '../actions/productActions'
function ProductScreen(props) {
    const productID = props.match.params.id
const [qty,setQty] = useState(1);
    const productDetails = useSelector(state=>state.productDetails)
   const dispatch = useDispatch();
 
   
  useEffect(()=>{
      dispatch(detailsProduct(productID))
     
  },[])
  const {loading,error,productDetail} = productDetails ;

  const addToCartHandler = ()=>{
      props.history.push(`/cart/${productID}?qty=${qty}`)
  }
    return (
        
        <div>
              {loading?(<LoadingBox />)
            :error?(<ErrorBox />)
            :(
                <div className="productscreen">
                <div className="productscreen__left">
                <div className="left__image">
                  <img alt="img" src={productDetail.image}></img>
                </div>
                <div className="left__info">
                    <p className="left__name">{productDetail.title}</p>
                    <p>Price: Rs. {productDetail.price}</p>
                    <p>Description: {productDetail.description}</p>
                </div>
            </div>
            <div className="productscreen__right">
                <div className="right__info">
                    <p>Price: <span>Rs. {productDetail.price}</span></p>
                    <p>
                        Status: {
                            productDetail.countInStock>0
                            ?<span>In Stock</span>
                            :<span>Out of Stock</span>
                        }
                    </p>
                    <p>
                        Qty
                        
                            <select value={qty} onChange={(e)=>setQty(e.target.value)}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                           
                       
                    </p>
                   
                    
                    <p>
                        <button onClick={addToCartHandler} type="button">Add To Cart</button>
                    </p>
                   


                    
                  
                </div>
            </div>
            </div>
            )
                    }
            
           
        </div>
    )
    }


export default ProductScreen
