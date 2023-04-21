import React from "react";
import Header from "../../components/header/header";
import SubHeaderBlue from "../../components/subHeaderBlue/subHeaderBlue";
import TableNavigationTask from "../../components/tableNavigationTask/tableNavigationTask";
import UserTable from "../../components/userTable/userTable";
import style from "./Homework.module.css"

const Homepage = () => {
    return (
        <div className={style.App}>
            <Header/>
            <SubHeaderBlue/>
            <TableNavigationTask/>
            <UserTable/>
        </div>
    )
}

export default Homepage