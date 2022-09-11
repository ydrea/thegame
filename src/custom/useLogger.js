import { useEffect } from "react";

function useLogger(value) {
  //prettier-ignore
  useEffect(()=>{console.log(value);},[value])
}

export default useLogger;
