import { useState } from "react";
import styles from "./Main.module.css";
import Sidebar from "./Sidebar/Sidebar";
import Content from "./Content/Content";
function Main() {
  const [isOpenNav, setIsOpenNav] = useState(false);
  const toggleMenu = () => {
    setIsOpenNav(!isOpenNav);
  };
  const closeMenu = () => {
    setIsOpenNav(false);
  };
  return (
    <div className={styles.wrapper}>
      <nav className={`${styles.navbar}  ${isOpenNav ? styles.open : ""}`}>
        <Sidebar />
      </nav>
      {isOpenNav && <div className={styles.overlay} onClick={closeMenu}></div>}
      <div className={styles.content}>
        <Content isOpenNav={isOpenNav} onClick={toggleMenu} />
      </div>
    </div>
  );
}
export default Main;
