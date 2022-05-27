import { combineReducers } from "redux";
import {  detailProductReducer, productListReducer } from "./productReducer";
import { cartReducer } from "./cartReducer";

const rootReducer = combineReducers({
   productList:productListReducer,
   productDetails:detailProductReducer,
   cart:cartReducer
});


export default rootReducer