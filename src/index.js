import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; // The App has to be wrapped inside browser router for routing
import { Provider } from 'react-redux'; // Provider is required to wrap the app because it binds redux to react
import { createStore , applyMiddleware , compose , combineReducers } from 'redux';// Creates a Redux store that holds the complete state tree of your app. There should only be a single store in your app.
import thunk from 'redux-thunk';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import burgerBuilderReducer from './store/reducers/burgerBuilder';
import orderReducer from './store/reducers/order';
import authReducer from './store/reducers/auth';


const composeEnhancers = process.env.NODE_ENV === 'development' ?  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;
//const store = createStore(reducer, /* preloadedState, */ composeEnhancers(

const rootReducer = combineReducers({
    burgerBuilder: burgerBuilderReducer,
    order: orderReducer,
    auth:authReducer
})

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
)); //Store is created

const app = (
    /* Binding your app to redux with store paramter which is passed to provider. This way redux store is created */
    <Provider store={store}> 
        <BrowserRouter> 
            <App />
        </BrowserRouter>
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
