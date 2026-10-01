import { useSelector, useDispatch} from "react-redux";
import type { RootState} from "../store/store";
import { increment, decrement, reset } from "../store/actions/counterActions";
import styles from "./Counter.module.css";

const Counter = () => {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div className={styles.counterContainer}>   
          <h2>Count: {count}</h2>
          <button onClick={ () => dispatch(increment())}>+1</button>
          <button onClick={ () => dispatch(decrement())}>-1</button>
          <button onClick={ () => dispatch(reset())}>Reset</button>
        </div>
    );
};

export default Counter;
 