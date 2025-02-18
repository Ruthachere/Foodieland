"use client";
import React, { useState } from "react";
import Image from "next/image";
import Form from "next/form";
import styles from "../inboxSection/inbox.module.css";
import image_two from "./../../public/images/avocado (1).png";
import image_one from "./../../public/images/avocado (2).png";

const Inbox = () => {
  const [email, setEmail] = useState("");

  return (
    <section>
      <div className={styles.inboxContainer}>
        <div className={styles.inboxContents}>
          <Image
            src={image_one}
            alt=""
            width={200}
            height={200}
            className={styles.image}
          />
          <div className={styles.inboxContent}>
            <div className={styles.title}>
              <h3>Deliciousness to your inbox</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqut enim
                ad minim{" "}
              </p>
            </div>

            <Form action="/subscribe" className={styles.inboxForm}>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className={styles.inboxInput}
              />

              <button
                type="submit"
                className={styles.subscribe_btn}
              >
                Subscribe
              </button>
            </Form>
          </div>

          <Image
            src={image_two}
            alt=""
            width={200}
            height={200}
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
};

export default Inbox;

