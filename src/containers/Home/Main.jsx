import styles from "./Main.module.css";
import React from "react";

const Main = () => {
  return (
    <div>
      <div className={styles.fon}>
        <h1 className={styles.title}>
          Дизайн-проект для вашей квартиры <br /> за 2 недели и 199 000 ₸
        </h1>
      </div>
    </div>
  );
};

export default Main;
