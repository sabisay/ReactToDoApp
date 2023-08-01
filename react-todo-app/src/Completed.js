import React, { useState } from "react";

export default function Completed({ defaultChecked = false }) {
  const [checked, setChecked] = useState(defaultChecked);

  return (
    <>
      {!checked && (
        <button type="button" className="btn" onClick={() => setChecked(true)}>
          TASK
        </button>
      )}

      {checked && (
        <button type="button" className="btn">
          <s>TASK</s>
        </button>
      )}
    </>
  );
}
