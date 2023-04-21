import React from "react";
import Button from "../../UI/button/button";
import style from "./subHeader.module.css";

const SubHeader = () => {
  return (
    <div className={style.subHeader}>
      <Button text="Назад" />
    </div>
  );
};

export default SubHeader