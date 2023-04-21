import React from "react";
import { NavLink } from "react-router-dom";
import style from "./radioButton.module.css";

const RadioButton = (props) => {
  return (
    <div className={style.radioInput}>
      <input type="radio" name={props.name} id={props.id} />
      <NavLink to={props.address}>
        <label for={props.id}>{props.label}</label>
      </NavLink>
    </div>
  );
};

export default RadioButton;
