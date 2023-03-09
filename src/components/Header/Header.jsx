import styles from "./Layout.module.css";
import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
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
          <div className={styles.tel}>
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.55399 5.24003L6.17099 1.33503C5.78099 0.88503 5.06599 0.88703 4.61299 1.34103L1.83099 4.12803C1.00299 4.95703 0.765988 6.18803 1.24499 7.17503C4.10661 13.1 8.88503 17.8851 14.806 20.755C15.792 21.234 17.022 20.997 17.85 20.168L20.658 17.355C21.113 16.9 21.114 16.181 20.66 15.791L16.74 12.426C16.33 12.074 15.693 12.12 15.282 12.532L13.918 13.898C13.8482 13.9712 13.7562 14.0195 13.6563 14.0354C13.5564 14.0513 13.4541 14.0339 13.365 13.986C11.1354 12.7021 9.28598 10.8503 8.00499 8.61903C7.95702 8.52978 7.93964 8.42726 7.95554 8.32719C7.97144 8.22711 8.01972 8.13502 8.09299 8.06503L9.45299 6.70403C9.86499 6.29003 9.90999 5.65003 9.55399 5.23903V5.24003Z"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
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