import { SkillProvider } from "../../hooks/SkillContext";
import styles from "./DefaultLayout.module.css";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Main from "./Main/Main";
import { Outlet } from "react-router-dom";
function DefaultLayout() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <Header />
      </header>
      <main className={styles.main}>
        <SkillProvider>
          
          <Outlet />
        </SkillProvider>
      </main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
}
export default DefaultLayout;
