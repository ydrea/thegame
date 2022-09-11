import { useState } from "react";
export const useBool = () => {
  const [bool, boolSet] = useState(false);
  const handleToggle = () => boolSet(!bool);
  return [bool, { setToggle: handleToggle }];
};
