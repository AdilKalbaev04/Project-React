import styles from "./Loaders.module.css";
import React from "react";

const Loaders = () => {
  return (
    <div className={styles.preloader}>
      <div className={styles.preloader__row}>
        <div className={styles.preloader__item}></div>
        <div className={styles.preloader__item}></div>
      </div>
    </div>
  );
};

export default Loaders;
