import { useEffect } from "react";
import { useMemo } from "react";
import { useState } from "react";

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input. 
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

export function Assignment1() {
    const [input, setInput] = useState(0);
    // Your solution starts here
    
    const expensiveValue = useMemo(()=> {
        const factorial = (input) => {
            if(input <= 1) return 1;
            return input * factorial(input - 1);
        }
        return factorial(input);
    },[input]); 
    // Your solution ends here

    // console.log("Expensive value calculated:",expensiveValue(input));

    return (
        <div>
            <input 
                type="number" 
                value={input} 
                onChange={(e) => setInput(Number(e.target.value))} 
            />
            <p>Calculated Value: {expensiveValue}</p>
        </div>
    );
}