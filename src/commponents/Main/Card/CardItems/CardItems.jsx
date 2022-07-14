import React, { useState } from "react";
import styles from "./CardItems.module.sass";
import { Modal } from "../../../Modal/Modal";

export const CardItems = ({ id, name, img, price, rait }) => {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const openModal = (e) => {
    setShow(true);
    let card = e.target.closest([".", [styles.container]].join("")); //получение карточки у которой нажали кнопку
    let title = card.querySelector([".", [styles.title]].join("")); // получение заголовка из карточки
    setTitle(title.textContent); // отправка имени в модальное окно
  };
  return (
    <div id={id} className={styles.container}>
      <div className={styles.img__container}>
        <img className={styles.img} src={img} alt="photo" />
      </div>
      <div className={styles.content}>
        <header className={styles.header}>
          <h4 className={styles.title}>{name}</h4>
          <span className={styles.rait}>рейтинг {rait}</span>
        </header>
        <footer className={styles.footer}>
          <div className={styles.price}>
            <span>{price} </span>
            <span className={styles.val}>Р</span>
          </div>
          <button onClick={openModal} className={styles.btn}>
            {" "}
            Купить
          </button>
        </footer>
      </div>
      <Modal onClose={() => setShow(false)} show={show} name={title} />
    </div>
  );
};
