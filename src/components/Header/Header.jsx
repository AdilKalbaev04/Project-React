import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <div>
        <span>
          Simple <span> Design</span>
        </span>
        <p>дизайн интерьера</p>
      </div>
      <div className={styles.nav}>
        <a className={styles.navlink} href=""></a>
      </div>
    </div>
  );
};

export default Header;
