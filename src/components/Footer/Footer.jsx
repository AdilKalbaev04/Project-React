import { Phone } from "../../icons";
import styles from "./Footer.module.css";
import React from "react";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.cont}>
          <div className={styles.logo__cont}>
            <span className={styles.logo1}>
              Simple <span className={styles.logo}> Design</span>
            </span>
            <p className={styles.p}>дизайн интерьера</p>
          </div>
          <div className={styles.nav}>
            <NavLink className={styles.navlink} to="/">
              Главная
            </NavLink>
            <a className={styles.navlink} to="/test">
              Тест
            </a>
            <NavLink className={styles.navlink} to="/catalog">
              Каталог
            </NavLink>
            <NavLink className={styles.navlink} to="/aboutus">
              О нас
            </NavLink>
            <NavLink className={styles.navlink} to="/price">
              Цены
            </NavLink>
          </div>
          <div>
            <span className={styles.someText}>
              Политика конфиденциальности <br /> Условия пользования
            </span>
          </div>
          <div>
            <div className={styles.tel}>
              <Phone />
              <div className={styles.number}>
                <span>+7 700 505 3000</span>
                <span>с 9:00 до 18:00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.underCont}>
        <span className={styles.text}>(с) 2022. Все права защищены.</span>
      </div>
    </>
  );
};
