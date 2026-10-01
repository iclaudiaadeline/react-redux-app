import { createStore, applyMiddleware } from 'redux';
import {rootReducer} from "./reducers";
import { createLogger } from "redux-logger";

export const store = createStore(rootReducer,applyMiddleware(createLogger())); 

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;