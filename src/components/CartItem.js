import React from 'react'
import './CartItem.css'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import { removeFromCart } from '../actions/cartActions'
function CartItem({item}) {
    const dispatch = useDispatch();
   
    return (
        <div className="cartitem">
            <div className="cartitem__image">
                <img alt="img" src={item.image}></img>

            </div>
            <Link to={`/products/${item.id}`} className="cartitem__name">
                <p>{`Product ${item.id}`}</p>
            </Link>
            <p className="cartitem__price">Rs. {item.price}</p>
            <p className="cartitem__select">Qty: {item.qty}</p>
            <button className="cartitem__delete" onClick={()=>dispatch(removeFromCart(item.id))}>
                <i className="fas fa-trash"></i>
            </button>
            
        </div>
    )
}

export default CartItem
