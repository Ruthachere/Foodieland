"use client";
import React, { useState } from "react";
import Input from "./inputComponent";
import DropDownField from "./dropDownInput";
import Message from "./message";
import styles from "./form.module.css";
import Button from "./button";

interface Errors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const Form = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Validate form
  const validateForm = () => {
    let Errors: Errors = {};
    if (!name) {
      Errors.name = "Name is required";
    }
    if (!email) {
      Errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      Errors.email = "Email is invalid.";
    }

    if (!subject) {
      Errors.subject = "Subject is required";
    }
    if (!message) {
      Errors.message = "Message is required";
    }
    setErrors(Errors);
  };

  //Handle submit
  function handleSubmit() {
    setIsSubmitted(true);
    validateForm();
  }

  return (
    <form className={styles.form}>
      <div className={styles.inputElements}>
        <div>
          <Input
            text={"Name"}
            placeholderText={"Enter your name.."}
            type={"text"}
            value={name}
            onChange={setName}
          />
          {isSubmitted && errors.name && (
            <p className={styles.error}>{errors.name}</p>
          )}
        </div>

        <div>
          <Input
            text={"Email address"}
            placeholderText={"Your email address.."}
            type={"email"}
            value={email}
            onChange={setEmail}
          />
          {isSubmitted && errors.email && (
            <p className={styles.error}>{errors.email}</p>
          )}
        </div>

        <div>
          <Input
            text={"Subject"}
            placeholderText={"Enter subject.."}
            type={"text"}
            value={subject}
            onChange={setSubject}
          />
          {isSubmitted && errors.subject && (
            <p className={styles.error}>{errors.subject}</p>
          )}
        </div>

        <DropDownField text={"Enquiry type"} />

      </div>

      <div>
        <Message text={"Message"} value={message} onChange={setMessage} />
        {isSubmitted && errors.message && (
          <p className={styles.error}>{errors.message}</p>
        )}
      </div>

      <div>
        <Button title={"Submit"} onClick={handleSubmit} />
      </div>
      
    </form>
  );
};

export default Form;
