import React from "react";
import styles from "./Form.module.sass";
import { useForm } from "react-hook-form";

export const Form = ({ name }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const data = {
    name: { name },
  };
  const onSubmit = (data) => alert(JSON.stringify(data));
  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className={styles.formTitle}>
          Название товара:
          <input
            className={styles.input}
            readOnly
            {...register("Name")}
            value={name}
          />
        </label>
        <label className={styles.formTitle}>
          Имя:
          <input
            className={styles.input}
            {...register("firstName", {
              required: "обязательно для заполнения",
            })}
          />
        </label>
        <label className={styles.formTitle}>
          Номер телефон в формате +79999999999
          <input
            className={styles.input}
            pattern="(\+7[-_()\s]+|\+7\s?[(]{0,1}[0-9]{3}[)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2})"
            type="tel"
            {...register("tel", { required: "обязательно для заполнения" })}
          />
        </label>

        <input className={styles.btnForm} type="submit" />
      </form>
    </div>
  );
};
