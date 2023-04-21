import React from "react";
import ButtonBlue from "../../UI/buttonBlue/buttonBlue";
import InputBlue from "../../UI/inputBlue/inputBlue";
import RadioButtonSecondary from "../../UI/radioButtonSecondary/radioButtonSecondary";
import style from "./tableNavigation.module.css";

const TableNavigation = () => {
  return (
    <div className={style.navigationBar}>
      <ButtonBlue text="Выбрать:" />
      <form>
        <div className={style.radioInput}>
          <RadioButtonSecondary name="navigation" id="profile" label="Текущие" />
          <RadioButtonSecondary name="navigation" id="password" label="Выполненные" />
          <InputBlue/>
        </div>
      </form>
    </div>
  );
};

export default TableNavigation;
