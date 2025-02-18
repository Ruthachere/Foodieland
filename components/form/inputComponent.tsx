import React from "react";
import styles from "../form/form.module.css";

const Input = ({
  placeholderText,
  type,
  text,
  value,
  onChange,
}: {
  placeholderText: string;
  type: string;
  text: string;
  value: string;
  onChange: (val: string) => void;
}) => {
  return (
    <div className={styles.inputContent}>
      <label htmlFor="#" className={styles.label}>
        {text}
      </label>
      <input
        type={type}
        placeholder={placeholderText}
        className={styles.inputField}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default Input;
