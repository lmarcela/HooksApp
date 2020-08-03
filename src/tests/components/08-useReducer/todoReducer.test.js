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
});
