import React from "react";
import { useContext } from "react";
import { CounterContext } from "../../context/context";
import styles from "./Nav.module.css"
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Nav() {
  const { count } = useContext(CounterContext);

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.container}>
          <NavLink to="/" className={({ isActive }) => `${styles.home} ${isActive ? styles.active_link : ""}`}>My App </NavLink>
          <div className={styles.nav__right}>
            <NavLink to="/" className={({ isActive }) => `${styles.home} ${isActive ? styles.active_link : ""}`}>Home </NavLink>
            <NavLink to="/register" className={({ isActive }) => `${styles.register} ${isActive ? styles.active_link : ""}`}>Register </NavLink>
            <NavLink to="/login" className={({ isActive }) => `${styles.register} ${isActive ? styles.active_link : ""}`}>Login </NavLink>
            <NavLink to="/cart" className={({ isActive }) => `${styles.cart} ${isActive ? styles.active_link : ""}`}>🛒 Cart ({count})</NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;