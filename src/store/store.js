// all of our action happen & state lives here
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer";

const middleWares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middleWares));
console.log('hey this is my store here', store);

export default store;