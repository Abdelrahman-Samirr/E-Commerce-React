import { useContext } from "react";
import { CounterContext } from "../../context/context";
import styles from "./Nav.module.css"
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Nav() {

  const { count } = useContext(CounterContext);

  const { counter } = useSelector((state) => state.counter)

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
            <h4 className={styles.wishlist}>Wishlist <span>({counter})</span></h4>
            <NavLink to="/cart" className={({ isActive }) => `${styles.cart} ${isActive ? styles.active_link : ""}`}>🛒 Cart ({count})</NavLink>
          </div>
          {isLoggedIn ? (<NavLink to="/login" onClick={handleLogout}>Logout</NavLink>) : (
            <div className={styles.login__part}>
              <NavLink to="/register" className={({ isActive }) => `${styles.register} ${isActive ? styles.active_link : ""}`}>Register </NavLink>
              <NavLink to="/login" className={({ isActive }) => `${styles.register} ${isActive ? styles.active_link : ""}`}>Login </NavLink>
            </div>
          )}

        </div>
      </nav>
    </>
  );
}

export default Nav;