import React from "react";
import { NavLink } from "react-router-dom";
import style from "./link.module.css";

const Link = (props) => {
  return (
      <NavLink className={style.NavLink} to={props.address}> {props.text} </NavLink>
  );
};

export default Link;
