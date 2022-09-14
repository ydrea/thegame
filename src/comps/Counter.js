import React, { useState } from "react";
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
      <Switch />{" "}
    </div>
  );
}
//

function Nav() {
  return (
    <div style={{ display: "flex" }}>
      <PButton />
      <NButton />
    </div>
  );
}
//
export const Switch = () => {
  // const [game, gameSet] = useState("start");
  const count = useSelector(selectCount);
  //
  if (count === 0) {
    console.log("nula");
    return <NButton />;
  } else if (count < 7) {
    return <Nav />;
  } else {
    return <PButton />;
  }
};

export const PButton = () => {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);

  return (
    <div>
      <Button
        className="button"
        size="lg"
        onClick={() => dispatch(decrement())}
      >
        &lArr; prev
      </Button>
    </div>
  );
};

export const NButton = () => {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);

  return (
    <div>
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
