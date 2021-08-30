import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux'
import allReducers from './reducer/index'
import { Provider } from 'react-redux'


// STORE
const store = createStore(allReducers, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

// // ACTION
// const dataFilter = () => {
//   return {
//     type: 'FILTER'
//   }
// }

// // REDUCER
// const filter = (state = data, action) => {
//   switch(action.type){
//     case "FILTER":
//       return state;
//     case "UNITDATAFILTER":
//       return state
//     default: 
//       return state
//   }
// }
// const store = createStore(filter)

// // display result in console
// store.subscribe(() => console.log(store.getState()))

// // DISPATCH
// store.dispatch(dataFilter())


ReactDOM.render(
  <Provider store={store}> <App /></Provider>,
  document.getElementById('root')
);