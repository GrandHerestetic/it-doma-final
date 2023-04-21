import React from "react";
import Button from "../../UI/button/button";
import RadioButton from "../../UI/radioButton/radioButton";
import style from "./navigationBar.module.css";

const NavigationBar = () => {
  return (
    <div className={style.navigationBar}>
      <Button text="Выбрать:" />
      <form>
        <div className={style.radioInput}>
          <RadioButton name="navigation" id="profile" label="Профиль" address="/profile"/>
          <RadioButton name="navigation" id="password" label="Пароль" address="/password"/>
        </div>
      </form>
    </div>
  );
};

export default NavigationBar;
