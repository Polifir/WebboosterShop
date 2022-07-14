import React from "react";
import styles from "./SutTitle.module.sass";

export const SubTitle = ({ text }) => {
  return <h1 className={styles.subtitle}>{text}</h1>;
};
