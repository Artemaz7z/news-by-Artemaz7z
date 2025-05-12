import styles from "./styles.module.css";
import Loader from "../Loader/Loader";

const Footer = ({ isDark, setIsDark }) => {
  return (
    <footer
      className={`${styles.footer} ${isDark ? styles.dark : styles.light}`}
    >
      <div className={styles.developer}>© Tyurin Artem, 2025</div>
      <Loader />
    </footer>
  );
};

export default Footer;
