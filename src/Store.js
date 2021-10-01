import { createStore, combineReducers, applyMiddleware} from 'redux';
import { sendEmailReducer } from './components/reducers/sendEmailReducer';

const reducer = combineReducers({
    sendEmail:sendEmailReducer
})

export const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
