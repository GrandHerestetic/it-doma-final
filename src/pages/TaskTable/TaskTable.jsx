import React from "react";
import Header from "../../components/header/header";
import TaskTable from "../../components/taskTable/taskTable";
import style from "./TaskTable.module.css"

const TaskTablePage = () => {
    return (
        <div className={style.App}>
            <Header/>
            <TaskTable/>
        </div>
    )
}

export default TaskTablePage