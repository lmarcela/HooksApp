import React from 'react';
import { shallow } from 'enzyme';
import { renderHook, act } from '@testing-library/react-hooks';
import { useCounter } from '../../hooks/useCounter';


describe('Pruebas en <UseCounter />',()=>{
    test('debe de retornar valores por defecto', () => { 
        const {result} = renderHook( () => useCounter());
        //console.log(result.current);
        expect(result.current.state).toBe(20);
        expect(typeof result.current.increment).toBe('function');
        expect(typeof result.current.decrement).toBe('function');
        expect(typeof result.current.reset).toBe('function');
    })

    test('debe de tener el counter en 100', () => { 
        const {result} = renderHook( () => useCounter(100));
        expect(result.current.state).toBe(100);
    })

    test('debe de incrementar el counter en 1', () => { 
        const {result} = renderHook( () => useCounter(100));
        const {increment} = result.current;
        act (()=>{
            increment(1);
        })
             
        expect(result.current.state).toBe(101);
    })

    test('debe de decrementar el counter en 1', () => { 
        const {result} = renderHook( () => useCounter(100));
        const {decrement} = result.current;
        act (()=>{
            decrement(1);
        })
             
        expect(result.current.state).toBe(99);
    })

    test('debe de reiniciar el counter en 100', () => { 
        const {result} = renderHook( () => useCounter(100));
        const {increment, reset} = result.current;
        act (()=>{
            increment(1);
            reset();
        })
             
        expect(result.current.state).toBe(100);
    })
});