import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from './reducers/rootReducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
const middleware = [thunk]

const persistConfig={
key:'main-root',
storage,
}
const persistedReducer = persistReducer(persistConfig,rootReducer);

const initialState = {
cart:{
    cartItems:[]
}
}


const store = createStore(persistedReducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))
const Persistor = persistStore(store)

export{Persistor};
export default store