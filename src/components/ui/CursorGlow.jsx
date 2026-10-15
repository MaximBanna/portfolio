import { useState, useEffect } from "react";

function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    
    function handleMove(event) {
      setPosition({ x: event.clientX, y: event.clientY });
    }

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 hidden pointer-fine:block" 
      style={{background: `radial-gradient(500px at ${position.x}px ${position.y}px, rgba(255, 255, 255, 0.06), transparent 80%)`,}}/>
  );
}

export default CursorGlow;
