import React, { useEffect, useState } from "react";
 

export default function App() {
  const [scaleFactor, setScaleFactor] = useState(1);

useEffect(() => {
  const handleResize = () => {
    console.log("resized");
    let sf1 = ((window.innerWidth*1.333) / 800)
    let sf2 = ((window.innerHeight*1.333) / 800)

    const newScaleFactor = Math.min(sf1, sf2);
   // console.log(window.)
    setScaleFactor(newScaleFactor);
  };

  window.addEventListener('resize', handleResize);

  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);

useEffect(() => {
  const handleOnLoad = () => {
    console.log("init scale resized");
    let sf1 = ((window.innerWidth*1.333) / 800)
    let sf2 = ((window.innerHeight*1.333) / 800)

    const newScaleFactor = Math.min(sf1, sf2);
    setScaleFactor(newScaleFactor);
  };

  window.addEventListener('load', handleOnLoad);

  return () => {
    window.removeEventListener('load', handleOnLoad);
  };
}, []);

  return (
    <div style={{ backgroundColor: '#6B7280', height: '100vh', overflow: 'hidden' }}>
      <iframe
        id="TWHG"
        title="TWHG window"
        width="800"
        height="800"
        src="TWHG/index.html"
        style={{ transform: `scale(${scaleFactor})`, transformOrigin: '0 0' }}
      />
    </div>
  );
}