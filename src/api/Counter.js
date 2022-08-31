import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../redux/counterSlice";
//
function Counter() {
  const dispatch = useDispatch();
  // const [count, countSet] = useState(1);
  return (
    <div>
      <AddOneButton />
      <Monitor />
    </div>
  );
}
//
export const AddOneButton = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(decrement())}>&lArr;</button>
      <button onClick={() => dispatch(increment())}>&rArr;</button>
    </div>
  );
};

export const Monitor = () => {
  const count = useSelector((state) => state.counter.count);

  return (
    <>
      <div>counter: {count} </div>
    </>
  );
};

export default Counter;
