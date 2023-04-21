import React from "react";
import style from "./passwordForm.module.css";
import InputRainbow from "../../UI/rainbowInput/rainbow";
import ButtonBig from "../../UI/button_big/buttonBig";
import NavigationBar from "../navigationBar/navigationBar";

const PasswordForm = () => {
  return (
    <div>
      <NavigationBar/>
      <form className={style.passwordForm}>
        <div className={style.input_group}>
          <InputRainbow title="Старый пароль" />
          <InputRainbow title="Новый пароль" />
          <InputRainbow title="Подтверждение нового пароля" />
        </div>
        <div className={style.button_group}>
          <ButtonBig text="Отменить" />
          <ButtonBig text="Сохранить" />
        </div>
      </form>
    </div>
  );
};

export default PasswordForm;
