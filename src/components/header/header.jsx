import React from "react";
import style from "./header.module.css";
import notification from "../../assets/notification.svg"
import rank from "../../assets/rank.svg"
import Link from "../../UI/links/link";
import logo from "../../assets/logoItDoma.svg";
import icon from "../../assets/icon.jpeg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className={style.Header}>
      <img src={logo} alt={style.Logo} />
      <Link text="Уроки" address=""/>
      <Link text="Информация" address="/task"/>
      <Link text="Баллы" address="/rank"/>
      <Link text="Чат" address=""/>
      <Link text="Расписание" address=""/>
      <Link text="Домашнее задание" address="/"/>
      <img src={notification} alt="Notification" />
      <img src={rank} alt="Rank" />
      <NavLink to="/profile">
      <img src={icon} alt="Icon" className={style.icon} />
      </NavLink>
    </header>
  );
};

export default Header;
