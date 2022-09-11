import { useSelector, useDispatch } from "react-redux";
// import useLogger from "./useLogger";
import {
  selectToggle,
  toggleSw,
  toggle,
  itsFalse,
  itsTrue,
} from "../redux/boolSlice";
export const useBoolRedux = () => {
  const dispatch = useDispatch();
  //select
  const boo = useSelector(selectToggle);
  // console.log(boo);
  //dispatch
  function handleToggle() {
    // console.log(boo);
    if (boo == true) {
      dispatch(itsFalse());
    } else {
      dispatch(itsTrue());
    }
  }
  //return
  return [boo, { setToggleRedux: handleToggle }];
};
