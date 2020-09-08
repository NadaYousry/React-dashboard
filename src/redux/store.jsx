import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { BaseReducer } from "./baseReducer";
import BaseSaga from "./baseSaga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  BaseReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(BaseSaga);
export default store;
