import styles from "./Skills.module.css";
import checkIcon from "../../../assets/check-icon.svg";
import bookIcon from "../../../assets/closed-book.svg";
import {
  C,
  github,
  css,
  java,
  JS,
  html,
  nodejs,
  react,
  postgresql,
  nextjs,
} from "../../../assets/icons/index.jsx";
const techStack = [
  { name: "C", icon: C },
  { name: "github", icon: github },
  { name: "css", icon: css },
  { name: "java", icon: java },
  { name: "html", icon: html },
  { name: "node-js", icon: nodejs },
  { name: "JS", icon: JS },
  { name: "react", icon: react },
  { name: "postgresql", icon: postgresql },
  { name: "nextjs", icon: nextjs },
];
function Skills() {
  const renderIcons = () => (
    <div className={styles.iconsList}>
      {techStack.map((tech, index) => (
        <div key={index} className={styles.iconBadges}>
          <img src={tech.icon} alt={`${tech.name} icon`} />
          <span>{tech.name}</span>
        </div>
      ))}
    </div>
  );

  return (
    <section className={styles.skillsSection}>
      <div className={`container ${styles.skillsContainer}`}>
        <div className={styles.sectionHeader}>
          <h1 className={styles.title}>Kỹ năng & chuyên môn</h1>
          <p className={styles.description}>
            Là một nhà phát triển web mới vào nghề, mình có nền tảng vững chắc
            về các framework front-end như React và thư viện NextJS, và có kinh
            nghiệm làm việc với các công nghệ back-end như Node.js và Express.
          </p>
        </div>

        <div className={styles.skillsGridContainer}>
          <div className={styles.skillsGridItem}></div>

          <div className={styles.skillsGridItem}>
            <div className={styles.skillsGridItemHeader}>
              <div>
                <img src={checkIcon} alt="check" />
                <h2>Công cụ và công nghệ</h2>
              </div>
              <p>
                Thành thạo nhiều công cụ lập trình web hiện đại, có kinh nghiệm
                xây dựng các ứng dụng web tương tác, thân thiện với người dùng
                và đam mê viết mã sạch, dễ bảo trì.
              </p>
            </div>

            <div>
              <div className={styles.iconsListWrapper}>
                {renderIcons()}
                {renderIcons()}
              </div>
              <div className={styles.iconsListWrapper}>
                {renderIcons()}
                {renderIcons()}
              </div>
            </div>
          </div>

          <div className={styles.skillsGridItem}>
            <div className={styles.skillsGridItemHeader}>
              <div>
                <img src={checkIcon} alt="check" />
                <h2>Kỹ Năng Mềm</h2>
              </div>
              <p>
                Kỹ năng giao tiếp, cộng tác, và giải quyết vấn đề xuất sắc, với
                thái độ chủ động và ham học hỏi, dễ dàng thích nghi trong môi
                trường làm việc nhóm năng động.
              </p>
            </div>

            <div className={styles.softSkillsContainer}>
              <div className={styles.softSkillsBadge}>
                <p>Giao tiếp chuyên nghiệp</p>
              </div>
              <div className={styles.softSkillsBadge}>
                <p>Quản lý thời gian hiệu quả</p>
              </div>
              <div className={styles.softSkillsBadge}>
                <p>Đáng tin cậy</p>
              </div>
              <div className={styles.softSkillsBadge}>
                <p>Ham học hỏi</p>
              </div>

              <div className={styles.softSkillsBookIcons}>
                {[1, 2, 3, 4].map((i) => (
                  <img key={i} src={bookIcon} alt="book" />
                ))}
              </div>
            </div>
          </div>

          <div className={styles.skillsGridItem}></div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
