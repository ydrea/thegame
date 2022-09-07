import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Toggle from "react-toggle";
//
const DARK_CLASS = "dark";
//
export const ToggleLD = () => {
  const systemPrefersDark = useMediaQuery(
    {
      query: "(prefers-color-scheme: dark)",
    },
    undefined,
    (prefersDark) => {
      setIsDark(prefersDark);
    }
  );
  const [isDark, setIsDark] = useState(systemPrefersDark);
  //
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add(DARK_CLASS);
    } else {
      document.documentElement.classList.remove(DARK_CLASS);
    }
  }, [isDark]);
  return (
    <div className="toggle-container">
      <Toggle
        className="react-switch-checkbox"
        checked={isDark}
        onChange={(event) => setIsDark(event.target.checked)}
        id={`react-switch-new`}
      />

      <label
        style={{ background: isDark && "#ff8700" }}
        className="react-switch-label"
        htmlFor={`react-switch-new`}
      >
        <span className={`react-switch-button`} />
      </label>
      <p> switch to {isDark ? "light" : "dark"} mode</p>
    </div>
  );
};
