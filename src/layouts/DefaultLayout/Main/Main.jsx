import { useState } from "react";
import styles from "./Main.module.css";
function Main() {
  const [isOpenNav, setIsOpenNav] = useState(false);
  const toggleMenu = () => {
    setIsOpenNav(!isOpenNav);
  };
  const closeMenu = () => {
    setIsOpenNav(false);
  };
  console.log(isOpenNav);
  return (
    <div className={styles.wrapper}>
      <nav
        className={`${styles.navbar}  ${isOpenNav ? styles.open : ""}`}
      ></nav>
      {isOpenNav && <div className={styles.overlay} onClick={closeMenu}></div>}
      <div
        className={styles.content }
      >
        <button className={styles.menubtn} onClick={toggleMenu}>
          Mở
        </button>
        aaaa
      </div>
    </div>
  );
}
export default Main;
