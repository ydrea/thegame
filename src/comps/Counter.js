import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, selectCount } from "../redux/counterSlice";
import { zip } from "lodash";

//
const yip = zip(["a", "b"], [1, 2], [true, false]);
console.log("lodash", yip);
//

function Counter() {
  return (
    <div>
      <Buttons />
      <Monitor />
    </div>
  );
}
//
export const Buttons = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(decrement())}>&lArr;</button>
      <button onClick={() => dispatch(increment())}>&rArr;</button>
    </div>
  );
};

export const Monitor = () => {
  const count = useSelector(selectCount);

  return (
    <>
      <div>counter: {count} </div>
    </>
  );
};

export default Counter;
