import ReactMarkdown from 'react-markdown';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import styles from "./Content.module.css";
import { useState } from "react";
import arrQuestionHtmls from "../../../../datas/html";
function Content() {
  const [isOpen, setIsOpen] = useState(false);
  const obj = arrQuestionHtmls;
  const arr = obj.questions;
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.search}>
          <button>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
          <input type="text" placeholder="Tìm kiếm..." />
        </div>

        <div className={styles.action}>
          <button>Tất cả</button>
          <button>Cơ bản</button>
          <button>Trung bình</button>
          <button>Nâng cao</button>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.title}>{"NgọcDat"}</div>
        <div className={styles.container}>
          {arr.map((question) => (
            <div
              key={question.id}
              className={styles.item}
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className={styles.headerItem}>
                <div className={styles.left}>
                  <span className={styles.codeItem}>#1</span>
                  <span className={styles.titleItem}>{question.title}</span>
                </div>
                <span className={styles.type}>{question.level}</span>
              </div>

              <div className={styles.contentItem}>
                <div className={styles.header_contentItem}>
                  {question.summary}
                </div>
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
          ))}
        </div>
      </div>
    </div>
  );
}
export default Content;
