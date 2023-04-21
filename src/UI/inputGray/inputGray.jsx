import React from "react";
import style from "./inputGray.module.css";

const InputGray = (props) => {
  return (
    <div className={style.inputForm}>
      <label for="firstName">{props.title}</label>
      <input
        type="text"
        name="firstName"
        id="firtName"
        placeholder={props.placeholder}
        disabled
      />
    </div>
  );
};

export default InputGray
