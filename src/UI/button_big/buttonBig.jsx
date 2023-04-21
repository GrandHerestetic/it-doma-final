import React from "react";
import styles from "./buttonBig.module.css"

const ButtonBig = (props) => {
    return(
        <button className={styles.button}>{props.text}</button>
    )
}

export default ButtonBig