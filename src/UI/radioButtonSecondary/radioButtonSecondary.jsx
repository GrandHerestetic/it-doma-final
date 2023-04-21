import React from "react";
import style from "./radioButtonSecondary.module.css";

const RadioButtonSecondary = (props) => {
  return (
    <div className={style.radioInput}>
      <input type="radio" name={props.name} id={props.id} />
      <label for={props.id}>{props.label}</label>
    </div>
  );
};

export default RadioButtonSecondary;
