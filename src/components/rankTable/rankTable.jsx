import React from "react";
import style from "./rankTable.module.css"
import blueStart from "../../assets/table/blueStar.svg";
import greenStar from "../../assets/table/greenStar.svg";
import orangeStar from "../../assets/table/orangeStar.svg";
import redStar from "../../assets/table/redStar.svg";
import goldStar from "../../assets/table/goldStar.svg";
import questionMark from "../../assets/table/questionMark.svg";

const RankTable = () => {
    return(
        <div className={style.rankTable}>
        <p>Рейтинг Тренеров</p>
        <table>
          <tr>
            <th>Место</th>
            <th>ФИО тренера</th>
            <th>Кол-во баллов</th>
            <th>Ранг</th>
            <th>Значок</th>
          </tr>
          <tr>
            <td>1</td>
            <td>ФИО</td>
            <td>30/33</td>
            <td>Стажер</td>
            <td>
              <img src={blueStart} />
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>ФИО</td>
            <td>30/33</td>
            <td>Стажер</td>
            <td>
              <img src={questionMark} />
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>ФИО</td>
            <td>30/33</td>
            <td>Стажер</td>
            <td>
              <img src={greenStar} />
              <img src={greenStar} />
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>ФИО</td>
            <td>30/33</td>
            <td>Стажер</td>
            <td>
              <img src={orangeStar} />
              <img src={orangeStar} />
              <img src={orangeStar} />
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>ФИО</td>
            <td>30/33</td>
            <td>Стажер</td>
            <td>
              <img src={redStar} />
              <img src={redStar} />
              <img src={redStar} />
              <img src={redStar} />
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td>ФИО</td>
            <td>30/33</td>
            <td>Стажер</td>
            <td>
              <img src={goldStar} />
              <img src={goldStar} />
              <img src={goldStar} />
              <img src={goldStar} />
              <img src={goldStar} />
            </td>
          </tr>
          <tr>
            <td>7</td>
            <td>ФИО</td>
            <td>30/33</td>
            <td>Стажер</td>
            <td>
              <img src={goldStar} />
              <img src={goldStar} />
              <img src={goldStar} />
              <img src={goldStar} />
              <img src={goldStar} />
            </td>
          </tr>
          <tr>
            <td>8</td>
            <td>ФИО</td>
            <td>30/33</td>
            <td>Стажер</td>
            <td>
              <img src={goldStar} />
              <img src={goldStar} />
              <img src={goldStar} />
              <img src={goldStar} />
              <img src={goldStar} />
            </td>
          </tr>
          <tr>
            <td>9</td>
            <td>ФИО</td>
            <td>30/33</td>
            <td>Стажер</td>
            <td>
              <img src={goldStar} />
              <img src={goldStar} />
              <img src={goldStar} />
              <img src={goldStar} />
              <img src={goldStar} />
            </td>
          </tr>
          <tr>
            <td>10</td>
            <td>ФИО</td>
            <td>30/33</td>
            <td>Стажер</td>
            <td>
              <img src={goldStar} />
              <img src={goldStar} />
              <img src={goldStar} />
              <img src={goldStar} />
              <img src={goldStar} />
            </td>
          </tr>
          <tr>
            <td>11</td>
            <td>ФИО</td>
            <td>30/33</td>
            <td>Стажер</td>
            <td>
              <img src={goldStar} />
              <img src={goldStar} />
              <img src={goldStar} />
              <img src={goldStar} />
              <img src={goldStar} />
            </td>
          </tr>
        </table>
      </div>
    )
}

export default RankTable