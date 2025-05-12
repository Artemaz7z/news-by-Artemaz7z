import { formatDate } from "../../helpers/formatDate";
import styles from "./styles.module.css";

const Header = ({ isDark, setIsDark }) => {
  return (
    <header
      className={`${styles.header} ${isDark ? styles.dark : styles.light}`}
    >
      <div className={styles.info}>
        <h1 className={styles.title}>The Latest news</h1>
        <p className={styles.date}>{formatDate(new Date())}</p>
      </div>
      <button className={styles.changeTheme} onClick={setIsDark}>
        Change Theme
      </button>
    </header>
  );
};

export default Header;
