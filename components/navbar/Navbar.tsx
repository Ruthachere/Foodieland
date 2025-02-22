'use client'
import React from "react";
import Link from "next/link";
import Logo from "./logo";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import styles from "./styles.module.css";
import { useCounter } from "@/context/themeContext";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/GlobalRedux/store";



const Navigation = () => {
  const style = { fontSize: "24px" };
  const count = useSelector((state:RootState) => state.counter.value);
  const dispatch = useDispatch();
  // const {counter, increment, decrement} = useCounter();

  return (
    <>
      <div className={styles.navbar}>
        <div>
          <Logo />
          <h1>Count:{count}</h1>
          {/* <h3> Counter: {counter}</h3> */}
        </div>

        <div className={styles.navbarElements}>
          <ul className={styles.ul}>
            <li>
              <Link rel="stylesheet" href="/">
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
              <Link rel="stylesheet" href="/ContactUs">
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
