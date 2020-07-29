import React, { useState, useMemo } from "react";
import "../02-useEffect/effects.css";
import { useCounter } from "../../hooks/useCounter";
import { procesoPesado } from "../../helpers/procesoPesado";

export const MemoHook = () => {
  const { state, increment } = useCounter(1000);
  const [show, setShow] = useState(true);

  const memoProcesoPesado = useMemo(() => procesoPesado(state), [state])

  return (
    <div>
        <h1>MemoHook</h1>
      <h3>
        Counter: <small>{state}</small>
      </h3>
      <hr />

      <p>{memoProcesoPesado}</p>

      <button className="btn btn-primary" onClick={() => increment(1)}>
        +1
      </button>

      <button
        className="btn btn-outline-primary ml-3"
        onClick={() => setShow(!show)}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </div>
  );
};
