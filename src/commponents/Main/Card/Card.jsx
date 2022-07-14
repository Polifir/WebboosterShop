import React from "react";
import styles from "./Card.module.sass";
import { CardItems } from "./CardItems/CardItems";
import item from "../../data/item.json";

export const Card = () => {
  return (
    <div className={styles.container}>
      {item.map((item) => (
        <CardItems
          id={item.id}
          name={item.name}
          img={item.img}
          price={item.price}
          rait={item.rait}
        />
      ))}
    </div>
  );
};
