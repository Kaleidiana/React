import { useState } from "react";

const Sample = () => {
    const [value, setValue] = useState(0);

    return (
        <div>
            <h2>Value: {value}</h2>
            <button onClick={() => setValue(value + 1)}>+</button>
            <button onClick={() => setValue(value - 1)}>-</button>
            
        </div>
    );
}

export default Sample;

