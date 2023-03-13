import { Phone } from "../../icons";
import "./Header.css";
import styles from "./Layout.module.css";
import Hamburger from "hamburger-react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const LinkNav = () => {
    if (isOpen) {
      return (
        <div className={`nav ${isOpen ? "isActive" : ""}  `}>
          <NavLink className={styles.navlink} to="/">
            Главная
          </NavLink>
          <NavLink className={styles.navlink} to="/test">
            Тест
          </NavLink>
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
      );
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.cont}>
        <div className={styles.logo__cont}>
          <span className={styles.logo1}>
            Simple <span className={styles.logo}> Design</span>
            {LinkNav()}
          </span>
          <p className={styles.p}>дизайн интерьера</p>
        </div>
        <div className={`navBar ${isOpen ? "isDisable" : ""}  `}>
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
        <div className={styles.cont_Hamburger}>
          <Hamburger toggled={isOpen} toggle={setOpen} />
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
  );
};

export default Header;
