import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, selectCount } from "../redux/counterSlice";
// import { zip } from "lodash";
import { Button } from "reactstrap";
import ProgressBA from "./ProgressBar";

//
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

  const count = useSelector(selectCount);
  return (
    <div>
      {count > 0 ? (
        <Button
          className="button"
          size="lg"
          onClick={() => dispatch(decrement())}
        >
          &lArr; prev
        </Button>
      ) : null}{" "}
      <Button
        className="button"
        size="lg"
        onClick={() => dispatch(increment())}
      >
        next &rArr;
      </Button>
    </div>
  );
};

export const Monitor = () => {
  const count = useSelector(selectCount);

  return (
    <div className="count">
      <ProgressBA count={count} />
    </div>
  );
};

export default Counter;
