   import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App'
import store,{Persistor} from './store'
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'
ReactDOM.render(
 <Provider store={store}>
   <PersistGate loading={null} persistor={Persistor}>
    <App />
   </PersistGate>
 </Provider>
 ,
  document.getElementById('root')
);
