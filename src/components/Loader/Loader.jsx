import React from "react";
import styles from "./styles.module.css";

const Loader = ({ size = 14, duration = 1 }) => {
  return (
    <div
      className={styles["wheel-and-hamster"]}
      style={{
        "--dur": `${duration}s`,
        fontSize: `${size}px`,
      }}
      aria-label="Orange and tan hamster running in a metal wheel"
      role="img"
    >
      <div className={styles.wheel}></div>
      <div className={styles.hamster}>
        <div className={styles.hamster__body}>
          <div className={styles.hamster__head}>
            <div className={styles.hamster__ear}></div>
            <div className={styles.hamster__eye}></div>
            <div className={styles.hamster__nose}></div>
          </div>
          <div
            className={`${styles.hamster__limb} ${styles["hamster__limb--fr"]}`}
          ></div>
          <div
            className={`${styles.hamster__limb} ${styles["hamster__limb--fl"]}`}
          ></div>
          <div
            className={`${styles.hamster__limb} ${styles["hamster__limb--br"]}`}
          ></div>
          <div
            className={`${styles.hamster__limb} ${styles["hamster__limb--bl"]}`}
          ></div>
          <div className={styles.hamster__tail}></div>
        </div>
      </div>
      <div className={styles.spoke}></div>
    </div>
  );
};

export default Loader;
