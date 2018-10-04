import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from 'redux-thunk';
import Password from '../reducers/Password';
import User from '../reducers/User';

const rootReducer = combineReducers({
    Password,
    User
})

const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk))

export default store