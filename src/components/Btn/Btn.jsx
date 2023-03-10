import styles from "./Btn.module.css";

const Btn = ({ children, click }) => {
  return (
    <button className={styles.btn} onClick={click}>
      {children}
    </button>
  );
};

export default Btn;
