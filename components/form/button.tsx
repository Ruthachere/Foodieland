import React from "react";
import styles from "./form.module.css";

const Button = ({ title, onClick }: { title: string; onClick: () => void }) => {
  return (
    <div>
      <button type="button" onClick={onClick} className={styles.submitButton}>
        {title}
      </button>
    </div>
  );
};

export default Button;
