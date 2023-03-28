import React, { useEffect,  useState } from 'react';
import './up-down.css'

function UpDownProject() {
    // const timerRef = useRef<string | number | NodeJS.Timeout>(0)
    const [log, setLog] = useState<string>("")
    // const [scrollDirection, setScrollDirection] = useState(0)

    useEffect(()=> {
        Object.keys(window).forEach(key => {
            if (/^on/.test(key)) {
                window.addEventListener(key.slice(2), event => {
                    console.log(event.type);
                    setLog((l) => `${event.type} | ${l}`)
                });
            }
        });
        // window.addEventListener("scroll", (event) => {
        //     // setScrollDirection(event.deltaY > 0 ? -1 : 1)
        //     setScrollDirection(1)

        //     // Debounce no input to set scroll back to neither direction
        //     clearTimeout(timerRef.current)
        //     timerRef.current = setTimeout(() => {
        //         setScrollDirection(0)
        //     }, 750)

        //     event.preventDefault();
        //     event.stopPropagation();
        // },  { passive:false });
      },[])

    // const scrollText = 
    //     scrollDirection > 0 ? 
    //         "UP" : 
    //         scrollDirection < 0 ? 
    //             "DOWN" : 
    //             "SCROLL"
      
  return (
    // <div className="indicator">
    //     {scrollText}
    // </div>
    <div className="log">
        {log}
    </div>
  );
}

export default UpDownProject;
