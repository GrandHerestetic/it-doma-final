import React from "react";
import style from "./userTable.module.css"
import noHomework from "../../assets/homework/noHomework.png"

const UserTable = () => {
    return (
        <div className={style.homepage}>
            <table className={style.studentList}>
                <tr>
                    <th>1</th>
                    <th>ФИО</th>
                </tr>
                <tr>
                    <td>2</td>
                    <td>ФИО</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>ФИО</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>ФИО</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>ФИО</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>ФИО</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>ФИО</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>ФИО</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>ФИО</td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>ФИО</td>
                </tr>
            </table>
            <div className={style.homepage_window}>
                <p>Домашнего задания еще нет</p>
                <img src={noHomework} />
            </div>
        </div>
    )
}

export default UserTable