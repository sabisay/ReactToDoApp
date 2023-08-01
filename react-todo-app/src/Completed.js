import React, { useState } from "react";

export default function Completed({name, done }) {
  const [checked, setChecked] = useState(false);

  return (
    <>
      {!checked && (
        <button defaultChecked={done} type="button" className="btn" onClick={() => setChecked(true)}>
          {name}
        </button>
      )}

      {checked && (
        <button defaultChecked={done} type="button" className="btn">
          <s>{name}</s>
        </button>
      )}
    </>
  );
}
