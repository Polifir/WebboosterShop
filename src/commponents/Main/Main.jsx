import React from "react";
import styles from "./Main.module.sass";
import { Card } from "./Card/Card";
import { Category } from "./Category/Category";

export const Main = () => {
  return (
    <main className={styles.main}>
      <Category name="Товар" />
      <Card />
    </main>
  );
};
