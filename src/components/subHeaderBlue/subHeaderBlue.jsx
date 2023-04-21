import React from "react";
import ButtonViolet from "../../UI/buttonViolet/buttonViolet";
import style from "./subHeaderBlue.module.css";

const SubHeaderBlue = () => {
  return (
    <div className={style.subHeader}>
      <ButtonViolet text="Scratch" />
      <ButtonViolet text="WEB" />
      <ButtonViolet text="Python" />
    </div>
  );
};

export default SubHeaderBlue