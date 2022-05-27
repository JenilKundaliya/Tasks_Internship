import * as actiontypes from '../actions/actiontypes'

export const productListReducer = (state={products:[]},action)=>{
    switch(action.type){
        case actiontypes.GET_PRODUCTS_REQUEST:
            return {loading:true};
        case actiontypes.GET_PRODUCTS_SUCCESS:
            return {loading:false,products:action.payload};
            case actiontypes.GET_PRODUCTS_FAIL:
                return {loading:false, error:true}
            default:
                return state;
    }
}
export const detailProductReducer = (state={productDetail:{}},action)=>{
switch(action.type){
    case actiontypes.GET_PRODUCT_DETAIL_REQUEST:
        return{loading:true}
        case actiontypes.GET_PRODUCT_DETAIL_SUCCESS:
            return {loading:false, productDetail:action.payload}
            case actiontypes.GET_PRODUCT_DETAIL_FAIL:
                return {loading:false, error:action.payload}
                default:
                    return state;
}
}
