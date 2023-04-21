import React from "react";
import styles from "./buttonViolet.module.css"

const ButtonViolet = (props) => {
    return(
        <button className={styles.button}>{props.text}</button>
    )
}

export default ButtonViolet