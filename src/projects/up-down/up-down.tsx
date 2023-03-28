import React, { useEffect,  useRef,  useState } from 'react';
import './up-down.css'

function UpDownProject() {
    const timerRef = useRef<string | number | NodeJS.Timeout>(0)
    // const [scrollDirection, setScrollDirection] = useState(0)
    const [scrollY, setScrollY] = useState(0)

    useEffect(()=> {
        window.onscroll = function(e) {
            // print "false" if direction is down and "true" if up
            // console.log(e);
          }
        window.addEventListener("scroll", (event) => {
            console.log(window.scrollY)
            setScrollY(window.scrollY)
            // setScrollDirection(event.deltaY > 0 ? -1 : 1)
            // setScrollDirection(1)

            // Debounce no input to set scroll back to neither direction
            clearTimeout(timerRef.current)
            timerRef.current = setTimeout(() => {
                // setScrollDirection(0)
            }, 750)

            event.preventDefault();
            event.stopPropagation();
        },  { passive:false });
      },[])

    // const scrollText = 
    //     scrollDirection > 0 ? 
    //         "UP" : 
    //         scrollDirection < 0 ? 
    //             "DOWN" : 
    //             "SCROLL"
      
  return (
    <div className="indicator">
        {scrollY}
    </div>
  );
}

export default UpDownProject;
