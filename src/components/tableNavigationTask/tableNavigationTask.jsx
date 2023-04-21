import React from "react";
import ButtonBlue from "../../UI/buttonBlue/buttonBlue";
import InputBlue from "../../UI/inputBlue/inputBlue";
import RadioButtonSecondary from "../../UI/radioButtonSecondary/radioButtonSecondary";
import style from "./tableNavigationTask.module.css";

const TableNavigationTask = () => {
  return (
    <div className={style.navigationBar}>
      <ButtonBlue text="Выбрать:" />
      <form>
        <div className={style.radioInput}>
          <RadioButtonSecondary name="navigation" id="profile" label="Все" />
          <RadioButtonSecondary name="navigation" id="password" label="Актуальные" />
          <RadioButtonSecondary name="navigation" id="password" label="Выполненные " />
          <RadioButtonSecondary name="navigation" id="password" label="Оценки" />
        </div>
      </form>
    </div>
  );
};

export default TableNavigationTask;
