import React from "react";
import Header from "../../components/header/header";
import RankTable from "../../components/rankTable/rankTable";
import style from "./RankTable.module.css"

const RankTablePage = () => {
    return (
        <div className={style.App}>
            <Header/>
            <RankTable/>
        </div>
    )
}

export default RankTablePage