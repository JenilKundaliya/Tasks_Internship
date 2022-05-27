import React, { useEffect } from 'react'
import CartItem from '../components/CartItem'
import './CartScreen.css'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import { addToCart } from '../actions/cartActions'
import {Link} from 'react-router-dom'
function CartScreen(props) {
    const productID = props.match.params.id
    const qty = props.location.search ? Number(props.location.search.split("=")[1]):0
    const cartItem = useSelector((state)=>state.cart)
    const {cartItems} = cartItem;
    const dispatch = useDispatch();
    useEffect(()=>{
       if(productID){
        dispatch(addToCart(productID,qty))
       }
        
    },[])

    return (
        <div className="cartscreen">
            <div className="cartscreen__left">
                <h2>Shopping Cart</h2>
                
                {
                    cartItems.length === 0?<p>Cart is Empty</p>
                    :
                    cartItems.map((item)=>{
                            return <CartItem item={item} key={item.id} />
                    })
                }
           </div>
          
        </div>
    )
}

export default CartScreen
