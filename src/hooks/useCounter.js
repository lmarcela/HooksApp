import { useState } from "react"

export const useCounter = (initialState=20) => {
    const [state, setstate] = useState(initialState);
    const increment = (factor = 2) => {
        setstate(state+factor);
    }
    const decrement = (factor = 2) => {
        setstate(state-factor);
    }
    const reset = () => {
        setstate(initialState);
    }
    return {
        state,
        increment,
        decrement,
        reset
    }
}
