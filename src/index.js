import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'assets/fonts/Teimer/stylesheet.css';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from 'redux/reducers';
import { Provider } from 'react-redux';
import thunk from "redux-thunk";

const store = createStore(
  rootReducer, 
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
