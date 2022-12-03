import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../features/counter/counterSlice";

const Counter = () => {

    const count = useSelector(state => state.counter.value);
    const dispatch = useDispatch();


    return (
        <div>
            <button
                aria-label="Increment"
                onClick={()=> dispatch(increment())}
            >
                Increment
            </button>
            <span>{count}</span>
            <button
                aria-label="Decrement"
                onClick={()=> dispatch(decrement())}
            >
                Decrement
            </button>
        </div>
    )
}

export default Counter;