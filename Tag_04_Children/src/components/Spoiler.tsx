import React, { useState } from 'react';

function Spoiler({ children }) {
    const [revealed, setRevealed] = useState(false);
  
    const handleClick = () => {
      setRevealed(!revealed);
    };
  
    return (
      <span
        onClick={handleClick}
        style={{
          cursor: "pointer",
          color: revealed ? "black" : "transparent",
          backgroundColor: revealed ? "transparent" : "black",
          padding: "0 4px",
          borderRadius: "4px",
          transition: "background-color 0.3s, color 0.3s",

        }}
      >
        {revealed ? children : "?????"}
      </span>
    );
  }

  export default Spoiler