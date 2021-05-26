import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ProductStore from './store/productStore';
import UserStore from './store/userStore';

export const Context =  createContext(null);

const commonStore = {
  user: new UserStore(),
  product: new ProductStore()
};

ReactDOM.render(
  <Context.Provider value={commonStore}>
      <App />
  </Context.Provider>,
  document.getElementById('root')
);

