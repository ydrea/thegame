import React from "react";
import { Button } from "reactstrap";
import { useBool } from "../custom/useBool";
import { useBoolRedux } from "../custom/useBoolRedux";

function Footer() {
  const [jel, { setToggle }] = useBool(false);
  const [aha, { setToggleRedux }] = useBoolRedux(false);
  return (
    <div className="footer">
      <Button className="button" onClick={setToggle}>
        setToggle
      </Button>
      {jel.toString()}
      <Button className="button" onClick={setToggleRedux}>
        setToggleRedux
      </Button>
      {aha.toString()}
    </div>
  );
}

export default Footer;
