import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.action}>
        <button>Bài viết</button>
        <button>Profile</button>
      </div>
      <div className={styles.content}>
        <span className={styles.title1}>Kiến thức về công nghệ thông tin</span>
        <span className={styles.title2}>HTML · CSS · JS · TS · React </span>
        <div className={styles.stats}>
          <div>
            <span className={styles.quantities}>1000</span>
            <span className={styles.name}>Câu hỏi</span>
          </div>
          <div>
            <span className={styles.quantities}>20</span>
            <span className={styles.name}>Chủ đề</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
