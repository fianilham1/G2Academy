  
import { createStore, combineReducers } from 'redux';
import authReducer from './reducers/authReducers';
import contactReducer from './reducers/contactReducers';

const rootReducer = combineReducers(
    { 
    auth: authReducer,
    contact: contactReducer
    }
);
const configureStore = () => {
    return createStore(rootReducer);
}
export default configureStore;