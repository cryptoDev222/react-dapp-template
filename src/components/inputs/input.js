import React, { useState, memo, useEffect } from "react";
import style from "./input.module.css";

export const Input = memo((props) => {
  const [waringShow, setWarningShow] = useState(false);

  useEffect(() => {
    if (props.value && waringShow) {
      setWarningShow(false);
    }
  }, [props.value]);

  const handleBlur = (e) => {
    if (e.target.value === "" && props.required) {
      setWarningShow(true);
    }
  };
  return (
    <>
      <input
        onBlur={handleBlur}
        name={props.name}
        className={style.input}
        {...props}
      />
      {waringShow && (
        <span
          color="red"
          style={{ marginTop: "8px", fontWeight: 400, fontSize: "12px" }}
        >
          This filed is required
        </span>
      )}
    </>
  );
});

export default Input;
