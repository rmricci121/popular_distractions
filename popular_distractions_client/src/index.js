import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'react-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer, 
    composeWithDevTools(rootReducer, applyMiddleware(thunk)))

    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById("root")
    )