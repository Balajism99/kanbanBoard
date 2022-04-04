import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/responsive.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import PDF from './preview/toPdf';

ReactDOM.render(
  <React.StrictMode>
    <Provider store ={store}>
    <App />,
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

