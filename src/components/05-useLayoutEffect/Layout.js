import React, { useRef, useLayoutEffect, useState } from "react";
import "./layout.css";
import { useFetch } from "../../hooks/useFetch";
import { useCounter } from "../../hooks/useCounter";

export const Layout = () => {
  const { state, increment, decrement, reset } = useCounter(1);
  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${state}`
  );
  const { quote } = !!data && data[0];

  const pTag = useRef();
  const [boxSize, setBoxSize] = useState({});

  useLayoutEffect(() => {
    setBoxSize(pTag.current.getBoundingClientRect());
  }, [quote]);

  return (
    <div>
      <h1>LayoutEffect</h1>
      <hr />

      <blockquote className="blockquote text-right">
        <p className="mb-0" ref={pTag}>
          {quote}
        </p>
      </blockquote>

      <pre>{JSON.stringify(boxSize, null, 3)}</pre>

      {state < 30 && (
        <>
          <button className="btn btn-primary" onClick={() => increment(1)}>
            Siguiente quote
          </button>
          <br />
          <br />
        </>
      )}

      {state !== 1 && (
        <>
          <button className="btn btn-primary" onClick={() => decrement(1)}>
            Anterior quote
          </button>
          <br />
          <br />
          <button className="btn btn-primary" onClick={reset}>
            Reset
          </button>
        </>
      )}
    </div>
  );
};
