import React from "react";
import styles from "./Title.module.sass";

export const Title = ({ text }) => {
  return <h1 className={styles.title}>{text}</h1>;
};
