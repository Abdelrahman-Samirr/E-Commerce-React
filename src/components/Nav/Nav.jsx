import { useContext } from "react";
import { CounterContext } from "../../context/context";
import styles from "./Nav.module.css"
import { NavLink} from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

function Nav() {

  const { count } = useContext(CounterContext);

  const { counter } = useSelector((state) => state.counter)

  const userData = JSON.parse(localStorage.getItem("userData"));
  const isLoggedIn = userData?.isLoggedIn;

  const handleLogout = () => {
    localStorage.removeItem("userData");
  };

  // Menu bar 
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.container}>
          <NavLink to="/" className={({ isActive }) => `${styles.home} ${isActive ? styles.active_link : ""}`}>My App </NavLink>
          <button
            className={styles.toggleButton}
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            ☰
          </button>
          <div className={`${styles.nav__right} ${isOpen ? styles.show : ""}`}>
            <div className={styles.nav__middle}>
              <NavLink to="/" onClick={closeMenu} className={({ isActive }) => `${styles.home} ${isActive ? styles.active_link : ""}`}>Home </NavLink>
              <NavLink to="/wishlist" onClick={closeMenu} className={({ isActive }) => `${styles.cart} ${isActive ? styles.active_link : ""}`}>Wishlist ({counter})</NavLink>
              <NavLink to="/cart" onClick={closeMenu} className={({ isActive }) => `${styles.cart} ${isActive ? styles.active_link : ""}`}>🛒 Cart ({count})</NavLink>
            </div>
            {isLoggedIn ? (<NavLink to="/login" onClick={handleLogout}>Logout</NavLink>) : (
              <div className={styles.login__part}>
                <NavLink to="/register" onClick={closeMenu} className={({ isActive }) => `${styles.register} ${isActive ? styles.active_link : ""}`}>Register </NavLink>
                <NavLink to="/login" onClick={closeMenu} className={({ isActive }) => `${styles.register} ${isActive ? styles.active_link : ""}`}>Login </NavLink>
              </div>

            )}
          </div>

        </div>
      </nav>
    </>
  );
}

export default Nav;