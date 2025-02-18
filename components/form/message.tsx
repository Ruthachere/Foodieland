import React from "react";
import styles from "./form.module.css";

const Message = ({
  text,
  value,
  onChange,
}: {
  text: string;
  value: string;
  onChange: (val: string) => void;
}) => {
  return (
    <div className={styles.messageContent}>
      <label htmlFor="#" className={styles.label}>
        {text}
      </label>
      <textarea
        name="message"
        placeholder="Enter a message"
        id="message"
        className={styles.message}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default Message;
