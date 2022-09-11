import React from "react";
import { Button } from "reactstrap";
import { useBool } from "../custom/useBool";
import { useBoolRedux } from "../custom/useBoolRedux";

function Footer() {
  const [FOO, { setToggle }] = useBool(false);
  const [BAR, { setToggleRedux }] = useBoolRedux(false);
  return (
    <div className="footer">
      <Button className="button" onClick={setToggle}>
        setToggle
      </Button>
      {FOO.toString()}
      <Button className="button" onClick={setToggleRedux}>
        setToggleRedux
      </Button>
      {BAR.toString()}
    </div>
  );
}

export default Footer;
