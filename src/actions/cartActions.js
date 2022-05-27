import * as actiontypes from '../actions/actiontypes'
import axios from 'axios';


export const addToCart = (productID,qty)=> async(dispatch,getState)=>{
    const {data} = await axios.get(`https://fakestoreapi.com/products/${productID}`)
    
dispatch({
    type:actiontypes.ADD_TO_CART,
    payload:data
});
localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = (productID)=>async(dispatch,getState)=>{
    dispatch({
        type:actiontypes.REMOVE_FROM_CART,
        payload:productID
    });
    localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))
}