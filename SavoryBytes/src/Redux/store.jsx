import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import authReducer from './reducers/authReducer';
import reducerUser from './reducers/reducerUser';

const rootReducer = combineReducers({
  auth: authReducer,
  users: reducerUser,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
