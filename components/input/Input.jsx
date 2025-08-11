import React from "react";
import "@/components/input/input.css";

function Input(props) {
  return (
    <div className="input-field">
      <input type="text" />
      <div className="labelline">{props.placeHolder}</div>
    </div>
  );
}

export default Input;
