import React from "react";
import styles from "./button.module.css"

const ButtonBlue = (props) => {
    return(
        <button className={styles.button}>{props.text}</button>
    )
}

export default ButtonBlue