import { useState } from "react";

function Counter(){

    const [count, setCount] = useState(0);

    const countUp = () => {setCount((count) => (count + 1))};
    const countDown = () => {setCount ((count) => (count - 1))};
    const reset = () => setCount(0);

    return(
        <div>
            <h2>{count}</h2>
            <button onClick={countUp}>+</button>
            <button onClick={countDown}>-</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}

export default Counter