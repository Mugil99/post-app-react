import { postReducer } from "./reducer/postReducer";
import thunk from 'redux-thunk';
import {createStore,combineReducers,apply, applyMiddleware} from 'redux';

const store=createStore(postReducer,applyMiddleware(thunk));
export default store;