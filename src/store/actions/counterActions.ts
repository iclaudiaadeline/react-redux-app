export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const RESET = "RESET";
export const SET_VALUE = "SET_VALUE";

export const increment = () => ({ type: INCREMENT } as const);

export const decrement = () => ({ type: DECREMENT } as const);

export const reset = () => ({ type: RESET } as const);
export const setValue = (value: number) =>
	({ type: SET_VALUE, payload: value } as const);

export type CounterAction =
	| ReturnType<typeof increment>
	| ReturnType<typeof decrement>
	| ReturnType<typeof reset>
	| ReturnType<typeof setValue>;
