import React from "react";
import styles from "./Category.module.sass";

export const Category = ({ name }) => {
  return <h3 className={styles.title}>{name}</h3>;
};
