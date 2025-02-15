import React from "react";
import Link from "next/link";
import Logo from "./logo";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import styles from "./styles.module.css";
const Navigation = () => {
  const style = { fontSize: "24px" };

  return (
    <>
      <div className={styles.navbar}>
        <div>
          <Logo />
        </div>

        <div className={styles.navbarElements}>
          <ul className={styles.ul}>
            <li>
              <Link rel="stylesheet" href="">
                Home
              </Link>
            </li>

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
              <Link rel="stylesheet" href="/app/about">
                About us
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.navigation_icons}>
          <FaFacebook style={style} />
          <FaTwitter style={style} />
          <FaInstagram style={style} />
        </div>
      </div>
    </>
  );
};

export default Navigation;
