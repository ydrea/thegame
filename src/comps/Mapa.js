import React, {useRef, useEffect, useState} from 'react'
import { Wrapper, Status } from "@googlemaps/react-wrapper";

//

//
function Mapa() {
    const ref = useRef(null);
    const [map, setMap] = useState();
    
    useEffect(() => {
      if (ref.current && !map) {
        setMap(new window.google.maps.Map(ref.current, {}));
      }
    }, [ref, map]);
//
    return (
    <div ref={ref}/>
  )
}

export default Mapa