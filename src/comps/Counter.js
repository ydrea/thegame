import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, selectCount } from "../redux/counterSlice";
import { zip } from "lodash";
import { Button } from "reactstrap";
import ProgressBA from "./ProgressBar";

//
const yip = zip(["a", "b"], [1, 2], [true, false]);
console.log("lodash", yip);
//

function Counter() {
  return (
    <div>
      <Monitor />
      <Buttons />
    </div>
  );
}
//
export const Buttons = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <Button
        className="button"
        size="lg"
        onClick={() => dispatch(decrement())}
      >
        &lArr; ajd
      </Button>
      <Button
        className="button"
        size="lg"
        onClick={() => dispatch(increment())}
      >
        ajd &rArr;
      </Button>
    </div>
  );
};

export const Monitor = () => {
  const count = useSelector(selectCount);

  return (
    <div className="count">
      {/* <div>counter: {count} </div> */}
      <ProgressBA count={count} />
    </div>
  );
};

export default Counter;
