import React from "react";
import Header from "../../components/header/header";
import ProfileForm from "../../components/profileForm/profileForm";
import SubHeader from "../../components/subHeader/subHeader";
import style from "./Homepage.module.css"

const Profile = () => {
    return (
        <div className={style.App}>
            <Header/>
            <SubHeader/>
            <ProfileForm/>
        </div>
    )
}

export default Profile