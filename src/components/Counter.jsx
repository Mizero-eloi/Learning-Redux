import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "../counterSlice";

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <div>
          <span>{count}</span>
        </div>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          aria-label="Increment by value"
          onClick={() => dispatch(incrementByAmount(33))}
        >
          Increment by amount
        </button>
      </div>
    </div>
  );
}
