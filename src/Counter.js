import { useState, useEffect } from "react";

const Counter = () => {
    const [counter, setCount] = useState(0);

    useEffect(() => {
        console.log("you clicked " + counter + "Time");
    });
    return (
        <div>
            <p> You Clicked {counter} times </p>
            <button onClick={() => setCount({Counter} + 1)}> Increment </button>
        </div>

    );
}

export default Counter;