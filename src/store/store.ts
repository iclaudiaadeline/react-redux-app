import { createStore, applyMiddleware } from 'redux';
import {rootReducer} from "./reducers";
import { createLogger } from "redux-logger";

export type RootState = ReturnType<typeof rootReducer>;

const STORAGE_KEY = "reduxState";
let preloadedState: Partial<RootState> | undefined;

const savedState = localStorage.getItem(STORAGE_KEY);

if (savedState) {
	try {
		preloadedState = JSON.parse(savedState) as Partial<RootState>;
	} catch {
		localStorage.removeItem(STORAGE_KEY);
	}
}

export const store = createStore(
	rootReducer,
	preloadedState,
	applyMiddleware(createLogger())
);

export type AppDispatch = typeof store.dispatch;

store.subscribe(() => {
	localStorage.setItem(STORAGE_KEY, JSON.stringify(store.getState()));
});