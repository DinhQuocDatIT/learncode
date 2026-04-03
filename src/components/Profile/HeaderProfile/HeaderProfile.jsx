import styles from "./HeaderProfile.module.css";

function HeaderProfile() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.headerColumnLeft}>
        <div className={styles.avatar}></div>
        <div className={styles.headerContentLeft}>
          <h2 className={styles.headerTitle}>Quốc Đạt</h2>
          <div className={styles.headerBadgeContainer}>
            <div className={styles.badge}>Lập trình web, mobile app</div>
            <div className={styles.badge}>Fullstack developer</div>
          </div>
          <p>
            Mong muốn ứng tuyển vị trí <span>Junior Developer</span> trong lĩnh
            vực phát triển web và mobile
          </p>
        </div>
      </div>

      <div className={styles.headerColumnRight}>
        <h2 className={styles.headerTitle}>Thông tin liên hệ</h2>
        <p>
          Gửi email cho mình tại: <span>dinhquocdat2005thdgli@gmail.com</span>
        </p>
        <p>
          Gọi cho mình tại: <span>0329626781</span>
        </p>
      </div>
    </div>
  );
}

export default HeaderProfile;
