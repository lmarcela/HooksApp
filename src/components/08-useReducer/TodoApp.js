import React, { useReducer } from 'react'
import '../02-useEffect/effects.css'
import { todoReducer } from './todoReducer';

const initialState = [{
    id: new Date().getTime,
    desc: 'Aprender React',
    done: false
}];

export const TodoApp = () => {
    const [todos] = useReducer(todoReducer, initialState);
    console.log(todos);

    return (
        <div>
            <h1>TodoApp</h1>
            <hr />
            <ul>
                <li>Hola</li>
                <li>Mundo</li>
                <li>Hi again!</li>
            </ul>
        </div>
    )
}
