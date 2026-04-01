import ReactMarkdown from "react-markdown";
import { useState } from "react";
import styles from "./Question.module.css";
import { LEVELS } from "../../constants/levels";
function Question({ question }) {
  const [isOpen, setIsOpen] = useState(false);
  const level = {
    [LEVELS.BASIC]: "Cơ bản",
    [LEVELS.INTERMEDIATE]: "Trung bình",
    [LEVELS.ADVANCED]: "Nâng cao",
  };
  return (
    <div
      key={question.id}
      className={styles.item}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className={styles.headerItem}>
        <div className={styles.left}>
          <span className={styles.codeItem}>#{question.id}</span>
          <span className={styles.titleItem}>{question.title}</span>
        </div>
        {question.level === LEVELS.BASIC && (
          <span className={`${styles.type}  ${styles.basic} `}>{level[question.level]}</span>
        )}
        {question.level === LEVELS.INTERMEDIATE && (
          <span className={`${styles.type}  ${styles.intermediate}  `}>{level[question.level]}</span>
        )}
        {question.level === LEVELS.ADVANCED && (
          <span className={`${styles.type}   ${styles.advanced} `}>{level[question.level]}</span>
        )}
      </div>

      <div className={`${styles.contentWrapper} ${isOpen ? styles.open : ""}`}>
        <div className={styles.contentItem}>
          <div className={styles.header_contentItem}>{question.summary}</div>
          <ul>
            {question.points.map((answer, index) => (
              <li key={index} className={styles.content_contentItem}>
                <ReactMarkdown>{answer}</ReactMarkdown>
              </li>
            ))}
          </ul>
          {question.example && (
            <div className={styles.example}> {question.example}</div>
          )}
        </div>
      </div>
    </div>
  );
}
export default Question;
