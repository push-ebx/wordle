import {createStore, combineReducers, applyMiddleware} from "redux";
import { boardReducer } from "./boardReducer";
import {composeWithDevTools} from "redux-devtools-extension";

const rootReducer = combineReducers({
  boardReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()))