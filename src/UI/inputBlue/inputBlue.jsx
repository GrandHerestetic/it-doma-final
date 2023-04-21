import React from "react";
import style from "./inputBlue.module.css";

const InputBlue = (props) => {
  return (
    <div className={style.inputForm}>
      <input
        type="text"
        name="filter"
        id="filter"
        placeholder="Поиск"
      />
    </div>
  );
};

export default InputBlue
