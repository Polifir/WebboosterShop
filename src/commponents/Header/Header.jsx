import React from "react";
import styles from "./Header.module.sass";

import { Title } from "./Title/Title";
import { SubTitle } from "./SubTitle/SubTitle";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Title text="Сакура" />
      <SubTitle text="магазин фигурок" />
    </header>
  );
};
