import axios from "axios";
import * as actiontypes from './actiontypes'

export const listProducts = (products)=>async(dispatch)=>{
dispatch({
    type:actiontypes.GET_PRODUCTS_REQUEST
})
try{
const {data} = await axios.get("https://fakestoreapi.com/products")

dispatch({
    type:actiontypes.GET_PRODUCTS_SUCCESS,
    payload:data
})
}
catch(error){
    dispatch({
        type:actiontypes.GET_PRODUCTS_FAIL,
        payload:error.message
    })
}


}

export const detailsProduct = (productID)=>async(dispatch)=>{
dispatch({
    type:actiontypes.GET_PRODUCT_DETAIL_REQUEST
})

try{
const {data} = await axios.get(`https://fakestoreapi.com/products/${productID}`)
dispatch({
    type:actiontypes.GET_PRODUCT_DETAIL_SUCCESS,
    payload:data
})
}catch(err){
dispatch({
    type:actiontypes.GET_PRODUCT_DETAIL_FAIL,
    payload:err.message
})
}

}