import { renderHook, act } from "@testing-library/react-hooks";
import { useForm } from "../../hooks/useForm";
import "@testing-library/jest-dom";

describe("Pruebas en <UseForm />", () => {
  const initialForm = {
    name: "Marcela",
    email: "marcela@prueba.com",
  };
  test("debe de regresar un formulario por defecto", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [values, handleInputChange, reset] = result.current;

    expect(values).toEqual(initialForm);
    expect(typeof handleInputChange).toBe("function");
    expect(typeof reset).toBe("function");
  });

  test("debe de cambiar el nombre en el formulario", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange] = result.current;
    act(() => {
      handleInputChange({
        target: { name: "name", value: "Lina" },
      });
    });
    
    const [values] = result.current;
    expect(values).toEqual({...initialForm, name: 'Lina'});

  });

  test("debe de reiniciar el formulario", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange, reset] = result.current;
    act(() => {
      handleInputChange({
        target: { name: "name", value: "Lina" },
      });
      reset();
    });
    
    const [values] = result.current;
    expect(values).toEqual(initialForm);
      
  });
});
