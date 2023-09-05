// all of our action happen & state lives here
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from 'redux-persist';
// import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga"
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import logger from "redux-logger";
import rootReducer from "./root-reducer";
import { rootSaga } from "./root-saga";

// demystifying logger (curry function below)
const reduxLogger = (store) => (next) => (action) => {
    console.log("inside the store");
    if (!action.type) return next(action)

    console.log("type", action.type);
    console.log("payload", action.payload);
    console.log("current state", store.getState());

    next(action);

    console.log("next state", store.getState());
}

const sagaMiddleware = createSagaMiddleware();

const middleWares = [process.env.NODE_ENV !== "production" && logger, sagaMiddleware].filter(Boolean);

const persistConfig = {
    key: 'root',
    storage,
    // blacklist: ['user'],
    whitelist: ['cart']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(...middleWares));
console.log('hey this is my store here', store);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
