import React from "react";
import style from "./rainbow.module.css";

const InputRainbow = (props) => {
  return (
    <div className={style.inputForm}>
      <label for="firstName">{props.title}</label>
      <input
        type="text"
        name="firstName"
        id="firtName"
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default InputRainbow
