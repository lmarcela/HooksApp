import React, { useState, useCallback, useEffect } from 'react'
import '../02-useEffect/effects.css'
import { ShowIncrement } from './ShowIncrement'

export const CallbackHook = () => {
    const [state, setState] = useState(10);
    /* const increment = () => {
        setstate(state+1);
    } */

    const increment = useCallback(
        (num) => {
            setState(c=> c+num);
        },
        [setState]
    );

    useEffect(() => {
        //???
    }, [increment])

    return (
        <div>
            <h1>useCallback Hook {state}</h1>
            <hr />
            <ShowIncrement increment={increment}/>
        </div>
    )
}
