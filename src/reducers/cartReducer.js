import * as actiontypes from '../actions/actiontypes'



export const cartReducer = (state = {cartItems:[],paymentMethod:'PayPal'},action)=>{
    switch(action.type){
        case actiontypes.ADD_TO_CART :
            const item = action.payload;
         
                return{
                   ...state,
                    cartItems:[...state.cartItems,item]
                }
            
            case actiontypes.REMOVE_FROM_CART:
                return{
                    ...state,
                    cartItems:state.cartItems.filter((x)=> x.id !== action.payload)
                }

             



        default:
            return state;    
    }
}
