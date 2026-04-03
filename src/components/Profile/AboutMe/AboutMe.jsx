import styles from "./AboutMe.module.css";
import rocketIcon from "../../../assets/rocket-icon.ico";
import laptopIcon from "../../../assets/laptop-icon.svg";
import cvFile from "../../../assets/CV_Resume.pdf";

function AboutMe() {
  return (
    <section className={styles.aboutMeSection}>
      <img src={rocketIcon} alt="rocket icon" />
      <img src={laptopIcon} alt="laptop icon" />
      <div className={styles.aboutMeContainer}>
        <div className={styles.aboutMeContentContainer}>
          <h1 className={styles.sectionTitle}>Giới thiệu bản thân</h1>
          <p className={styles.sectionDescription}>
            Xin chào! Mình là sinh viên năm cuối trường Đại học Giao thông vận
            tải Hồ Chí Minh . Mình có niềm đam mê với công việc lập trình và vô
            cùng yêu thích việc tạo ra các trang web và mobile app hiện đại và
            có tính ứng dụng cao.
          </p>

          <div className={styles.cta}>
            <a
              href={cvFile}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primaryButton}
              download
            >
              Tải CV
            </a>
            <a href="#ProjectContainer" className={styles.outlineButton}>
              Xem dự án
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
