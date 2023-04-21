import React from "react";
import Header from "../../components/header/header";
import PasswordForm from "../../components/passwordForm/passwordForm";
import SubHeader from "../../components/subHeader/subHeader";
import style from "./PasswordForm.module.css"

const PasswordPage = () => {
    return (
        <div className={style.App}>
            <Header/>
            <SubHeader/>
            <PasswordForm/>
        </div>
    )
}

export default PasswordPage