import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

// reducers
import { themeReducer } from "./theme/reducer";

const reducers = combineReducers({
    theme: themeReducer,
})

export default createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))