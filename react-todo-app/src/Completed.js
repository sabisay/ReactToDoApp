import React, { useState} from "react";


export default function Completed({ name, done }) {
  const [checked, setChecked] = useState(false);
  function Increase (num){num++;}

  return (
    <>
      {!checked && (
        <button
          checked={done}
          type="button"
          className="btn"
          onClick={() => setChecked(true)}
        >
          {name}
        </button>
      )}
      {checked && (
        <button checked={done} type="button" className="btnDone">
          <s className="completed">{name}</s>

        </button>
      )}
    </>
    
  );
}
