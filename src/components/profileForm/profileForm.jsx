import React from "react";
import style from "./profileForm.module.css";
import InputGray from "../../UI/inputGray/inputGray";
import icon from "../../assets/icon.jpeg";
import dowload from "../../assets/dowload.svg";
import InputRainbow from "../../UI/rainbowInput/rainbow";
import SelectRainbow from "../../UI/selectRainbow/selectRainbow";
import NavigationBar from "../navigationBar/navigationBar";

const ProfileForm = () => {
  return (
    <div>
      <NavigationBar/>
      <div className={style.profileForm}>
        <div className={style.userData}>
          <div className={style.userImage}>
            <img src={icon} alt="Icon" className={style.icon} />
            <form>
              <label className={style.iconUploader}>
                <input type="file" />
                <img src={dowload} />
                <p>Заменить</p>
              </label>
            </form>
          </div>
        </div>
        <form>
          <InputGray title="Имя" placeholder="Введите свое имя" />
          <InputGray title="Фамилия" placeholder="Введите свою фамилию" />
          <InputGray title="Квалификация" placeholder="Эксперт супер пупер" />
          <SelectRainbow title="Пол" />
          <InputRainbow
            title="Номер телефона"
            placeholder="Введите свой номер"
          />
        </form>
      </div>
    </div>
  );
};

export default ProfileForm;
