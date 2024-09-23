import { useState } from "react";

function FAQ({ question, shortAnswer, longAnswer }) {
    const [showShort, setShowShort] = useState(false);
    const [showLong, setShowLong] = useState(false);
  
    return (
      <div className="faq">
        <h3>{question}</h3>
        <button onClick={() => setShowShort(!showShort)}>Short Answer</button>
        {showShort && <p>{shortAnswer}</p>}
        <button onClick={() => setShowLong(!showLong)}>Long Answer</button>
        {showLong && <p>{longAnswer}</p>}
      </div>
    );
  }
  
  export default FAQ;