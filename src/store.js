import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer';

const rootReducer = combineReducers({
    list: reducer
})

const middleware = composeWithDevTools(applyMiddleware(thunk));
const store = createStore(rootReducer, middleware);

export default store;