import { useState } from "react";

function DayNightSwitch() {
    const [isDarkMode, setIsDarkMode] = useState(false);
  
    const toggleMode = () => {
      setIsDarkMode(!isDarkMode);
    };
  
    return (
      <div style={{backgroundColor: isDarkMode ? "black" : "white",
        width: "100%",
        height: "900px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center"
      }}>
        <h1 style={{ color: isDarkMode ? "white" : "black" }}>
          {isDarkMode ? "Night 🌝" : "Day 🌞"}
        </h1>
        <button
          onClick={toggleMode}
          style={{
            backgroundColor: isDarkMode ? "black" : "white",
            color: isDarkMode ? "white" : "black",
            border: isDarkMode ? "solid white" : "solid black",
            padding: "10px 20px",
            borderRadius: "10px",
            cursor: "pointer",
            height: "40px"
          }}
        >
          {isDarkMode ? "Change to Day" : "Change to Night"}
        </button>
      </div>
    );
  }
  
  export default DayNightSwitch;