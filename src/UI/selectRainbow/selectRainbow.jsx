import React from "react";
import style from "./selectRainbow.module.css";

const SelectRainbow = (props) => {
  return (
    <div className={style.selectForm}>
      <label for="firstName">{props.title}</label>
      <select>
        <option>Женский</option>
        <option>Мужской</option>
      </select>
    </div>
  );
};

export default SelectRainbow;
