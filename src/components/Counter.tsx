
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { AppDispatch, RootState } from "../store/store";
import { increment, decrement, reset, setValue } from "../store/actions/counterActions";
import styles from "./Counter.module.css";

const Counter = () => {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch<AppDispatch>();
    const [customValue, setCustomValue] = useState("0");

    const handleSetValue = () => {
        const nextValue = Number(customValue);

        if (!Number.isNaN(nextValue)) {
            dispatch(setValue(nextValue));
        }
    };

    return (
        <div className={styles.counterContainer}>
            <h2>Count: {count}</h2>
            <button onClick={() => dispatch(increment())}>+1</button>
            <button onClick={() => dispatch(decrement())}>-1</button>
            <button onClick={() => dispatch(reset())}>Reset</button>

            <div>
                <input
                    type="number"
                    value={customValue}
                    onChange={(event) => setCustomValue(event.target.value)}
                />
                <button onClick={handleSetValue}>Set Value</button>
            </div>
        </div>
    );
};

export default Counter;
