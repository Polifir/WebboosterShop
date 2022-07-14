import React from "react";
import { Form } from "./Form/Form";
import styles from "./Modal.module.sass";

export const Modal = ({ show, name, onClose }) => {
  if (!show) {
    return null;
  }
  return (
    <div className={styles.modal} onClick={onClose}>
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        <header className={styles.header}>
          <button onClick={onClose} className={styles.btn}>
            close
          </button>
          <div className={styles.text}>{name}</div>
        </header>
        <h4 className={styles.title}> Оформление товара</h4>
        <div className={styles.main}>
          <Form name={name} />
        </div>
      </div>
    </div>
  );
};
