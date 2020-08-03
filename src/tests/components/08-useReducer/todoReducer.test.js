import React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import { todoReducer } from "../../../components/08-useReducer/todoReducer";
import { demoTodos } from "../../datosFijos/demoTodos";

describe("Pruebas en <todoReducer />", () => {
  test("debe de retornar el estado por defecto", () => {
    const state = todoReducer(demoTodos, {});
    expect(state).toEqual(demoTodos);
  });

  test("debe de agregar un TODO", () => {
    const state = todoReducer(demoTodos, {
        type: "add",
        payload: {
            id: 3,
            desc: "Aprender Node",
            done: false,
          },
      });
      expect(state.length).toBe(3);
      expect(state).toEqual([...demoTodos,{
        id: 3,
        desc: "Aprender Node",
        done: false,
      }]);
  });

  test("debe de borrar un TODO", () => {
    const state = todoReducer(demoTodos, {
        type: "delete",
        payload: 2,
      });
      expect(state.length).toBe(1);
      expect(state).toEqual([demoTodos[0]]);
  });

  test("debe de hacer el Toggle del TODO", () => {
    const state = todoReducer(demoTodos, {
        type: "toggle",
        payload: 2,
      });
      expect(state[1].done).toBe(true);
      expect(state[0]).toEqual(demoTodos[0]);
  });
});
