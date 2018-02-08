import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react'
import Message from './containers/Message';
import Input from './containers/Input';
import reducer from './reducer';

const persistedReducer = persistReducer({
    key: 'root',
    storage
}, reducer);
const store = createStore(persistedReducer);

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistStore(store)}>
        <Router>
            <Switch>
                <Redirect exact from="/" to="/messages"/>
                <Route exact path='/messages' component={Message} />
                <Route path='/messages/create' component={Input} />
            </Switch>
        </Router>
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);