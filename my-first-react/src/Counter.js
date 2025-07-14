import { useState } from "react";

function Counter() {
    const [counter, setContador] = useState(0);

    return (
        <div>
            <h2>Look at this silly number: {counter}</h2>
            <button onClick={() => setContador(counter + 1)}>MORE !!!</button>
        </div>
    );
}

export default Counter;