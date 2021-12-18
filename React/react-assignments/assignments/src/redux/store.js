import {createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from './reducer';
const middleware = [thunk]
 //creating a store. (inbuilt function)
const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
