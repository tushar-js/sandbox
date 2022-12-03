import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByAmount, incrementAsync } from "../features/counter/counterSlice";

const Counter = () => {

    const count = useSelector(state => state.counter.value);
    const dispatch = useDispatch();


    return (
        <div>
            <button
                aria-label="Decrement"
                onClick={() => dispatch(decrement())}
            >
                Decrement
            </button>
            <span>{count}</span>
            <button
                aria-label="Increment"
                onClick={() => dispatch(increment())}
            >
                Increment
            </button>
            <button
                aria-label="Increment By Amout"
                onClick={() => dispatch(incrementByAmount(2))}
            >
                Increment By 2
            </button>
            <button
                aria-label="Increment Async"
                onClick={() => dispatch(incrementAsync(10))}
            >
                Increment Async
            </button>

        </div>
    )
}

export default Counter;