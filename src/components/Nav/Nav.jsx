import { useContext } from "react";
import { CounterContext } from "../../context/context";
import styles from "./Nav.module.css"
import { NavLink, useNavigate } from "react-router-dom";

function Nav() {

  const { count } = useContext(CounterContext);

  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("userData"));
  const isLoggedIn = userData?.isLoggedIn;

  const handleLogout = () => {
    localStorage.removeItem("userData");
  };

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.container}>
          <NavLink to="/" className={({ isActive }) => `${styles.home} ${isActive ? styles.active_link : ""}`}>My App </NavLink>
          <div className={styles.nav__right}>
            <NavLink to="/" className={({ isActive }) => `${styles.home} ${isActive ? styles.active_link : ""}`}>Home </NavLink>
            {isLoggedIn ? (<NavLink to="/login" onClick={handleLogout}>Logout</NavLink>) : (
              <div className={styles.login__part}>
                <NavLink to="/register" className={({ isActive }) => `${styles.register} ${isActive ? styles.active_link : ""}`}>Register </NavLink>
                <NavLink to="/login" className={({ isActive }) => `${styles.register} ${isActive ? styles.active_link : ""}`}>Login </NavLink>
              </div>
            )}
            <NavLink to="/cart" className={({ isActive }) => `${styles.cart} ${isActive ? styles.active_link : ""}`}>🛒 Cart ({count})</NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;