import React from "react";
import styles from './form.module.css'

const DropDownField = ({ text }: { text: string }) => {
  return (
    <div className={styles.dropdownContent}>
      <label htmlFor="#" className={styles.label}>{text}</label>
      <select name="Enquiry" id="1" className={styles.selectInput}>
        <option value="1" className={styles.option}>Advertising</option>
      </select>
    </div>
  );
};

export default DropDownField;
