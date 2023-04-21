import React from "react";
import style from "./taskTable.module.css";
import TableNavigation from "../tableNavigation/tableNavigation";
import complete from "../../assets/table/complete.svg"

const TaskTable = () => {
  return (
    <div>
      <div className={style.tableHeader}>
        <p>Задания для повышения ранга</p>
      </div>
      <TableNavigation/>
      <table className={style.rankTable}>
        <tr>
          <th>№</th>
          <th>Задание</th>
          <th>Кол-во баллов</th>
          <th>Срок выполнения</th>
          <th>Описание</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Задание</td>
          <td>30/33</td>
          <td>02.12.22</td>
          <td>
            <img src={complete} />
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Задание</td>
          <td>30/33</td>
          <td>02.12.22</td>
          <td>
            <img src={complete} />
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>Задание</td>
          <td>30/33</td>
          <td>02.12.22</td>
          <td>
            <img src={complete} />
          </td>
        </tr>
        <tr>
          <td>4</td>
          <td>Задание</td>
          <td>30/33</td>
          <td>02.12.22</td>
          <td>
            <img src={complete} />
          </td>
        </tr>
        <tr>
          <td>6</td>
          <td>Задание</td>
          <td>30/33</td>
          <td>02.12.22</td>
          <td>
            <img src={complete} />
          </td>
        </tr>
        <tr>
          <td>7</td>
          <td>Задание</td>
          <td>30/33</td>
          <td>02.12.22</td>
          <td>
            <img src={complete} />
          </td>
        </tr>
        <tr>
          <td>8</td>
          <td>Задание</td>
          <td>30/33</td>
          <td>02.12.22</td>
          <td>
            <img src={complete} />
          </td>
        </tr>
        <tr>
          <td>9</td>
          <td>Задание</td>
          <td>30/33</td>
          <td>02.12.22</td>
          <td>
            <img src={complete} />
          </td>
        </tr>
        <tr>
          <td>10</td>
          <td>Задание</td>
          <td>30/33</td>
          <td>02.12.22</td>
          <td>
            <img src={complete} />
          </td>
        </tr>
        <tr>
          <td>11</td>
          <td>Задание</td>
          <td>30/33</td>
          <td>02.12.22</td>
          <td>
            <img src={complete} />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default TaskTable;
