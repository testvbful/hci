import React from 'react';
import ReactDOM from 'react-dom';
import './styles/css/style.css';
import App from './components/App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from "./redux/store/store";
import { getAnimals } from './redux/actions';
import axios from 'axios';

const store = configureStore();
axios.get('/getAllAnimals')
.then(function (response) {
  store.dispatch(getAnimals(response.data.express));
})


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, 
    
document.getElementById('root'));
