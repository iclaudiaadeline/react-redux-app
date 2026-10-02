import type { UnknownAction } from "redux";
import {
    INCREMENT,
    DECREMENT,
    RESET,
    SET_VALUE,
    type CounterAction,
} from "../actions/counterActions";

 interface CounterState {
    value: number;
}

const initialState: CounterState = {
    value: 0,
};
 
export const counterReducer = (
    state = initialState,
    action: CounterAction | UnknownAction
): CounterState => {
    switch (action.type) {
        case INCREMENT:
            return {value: state.value + 1 };
        case DECREMENT:
                return {value: state.value - 1 };
        case RESET:
                    return {value: 0 };
         case SET_VALUE:
      return {
        value: typeof action.payload === "number" ? action.payload : state.value,
      };
          default:
                    return state;
    }
};