import {combineReducers, createStore, applyMiddleware} from "redux"
import {composeWithDevTools} from "redux-devtools-extension"
import thunk from "redux-thunk"
// import userReducer from "./userReducer.js"
// import fileReducer from "./fileReducer.js"

const rootReducer = combineReducers({
  // user: userReducer,
  // files: fileReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)) )
  
