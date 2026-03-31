import styles from "./DefaultLayout.module.css";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Main from "./Main/Main";
function DefaultLayout() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <Header />
      </header>
      <main className={styles.main}>
        <Main />
      </main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
}
export default DefaultLayout;
