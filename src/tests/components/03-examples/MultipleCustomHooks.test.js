import React from "react";
import { shallow } from "enzyme";
import { MultipleCustomHooks } from "../../../components/03-examples/MultipleCustomHooks";
import "@testing-library/jest-dom";
import { useFetch } from "../../../hooks/useFetch";
import "@testing-library/jest-dom";
import { useCounter } from "../../../hooks/useCounter";
jest.mock("../../../hooks/useFetch");
jest.mock("../../../hooks/useCounter");

describe("Pruebas en <MultipleCustomHooks />", () => {
  useCounter.mockReturnValue({
      counter: 10,
      increment: () => {}
  });

  test("debe de mostrarse correctamente", () => {
    useFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null,
    });

    const wrapper = shallow(<MultipleCustomHooks />);
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de mostrar la información", () => {
    useFetch.mockReturnValue({
      data: [
        {
          author: "Marcela",
          quote: "Hola Mundo",
        },
      ],
      loading: false,
      error: null,
    });

    const wrapper = shallow(<MultipleCustomHooks />);
    expect(wrapper.find(".alert").exists()).toBe(false);
    expect(wrapper.find(".mb-0").text().trim()).toBe("Hola Mundo");
    expect(wrapper.find("footer").text().trim()).toBe("Marcela");
  }); 
});