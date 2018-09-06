import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH_TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

// Interceptor is use to get details about request config.. 
//You can add headers/data whatevr u need to all ur requests globally which are common to the project
axios.interceptors.request.use(request => {
    console.log(request);
    // Edit Request Config
    return request;
}, error => {
        console.log(error);
        return Promise.reject(error);

});


axios.interceptors.request.use(response => {
    console.log(response);
    // Edit Request Config
    return response;
}, error => {
        console.log(error);
        return Promise.reject(error);

});

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
