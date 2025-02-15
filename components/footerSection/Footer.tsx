import React from "react";
import Logo from "../navbar/logo";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import styles from "./footer.module.css";

const Footer = () => {
  const style = { fontSize: "24px" };
  return (
    <footer>
      <div className={styles.footerContainer}>
        <div className={styles.footerContent}>
          <div className={styles.footerMessage}>
            <Logo />
            <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, </p>
          </div>

          <div className={styles.footerElements}>
            <ul>
              <li>
                <Link rel="stylesheet" href="">
                  Recipes
                </Link>
              </li>

              <li>
                <Link rel="stylesheet" href="">
                  Blog
                </Link>
              </li>

              <li>
                <Link rel="stylesheet" href="">
                  Contact
                </Link>
              </li>

              <li>
                <Link rel="stylesheet" href="">
                  About us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.footerLinks}>
          <div className={styles.footerCite}>
            <cite>© 2020 Flowbase. Powered by Webflow</cite>
          </div>
          <div className={styles.footer_icons}>
            <FaFacebook style={style} />
            <FaTwitter style={style} />
            <FaInstagram style={style} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
