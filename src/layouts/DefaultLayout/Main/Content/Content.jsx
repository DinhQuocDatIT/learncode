import ReactMarkdown from "react-markdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import styles from "./Content.module.css";
import { useState } from "react";
import arrQuestionHtmls from "../../../../datas/html";
import { useSkill } from "../../../../hooks/SkillContext";
import Question from "../../../../components/Question/Question";
import { LEVELS } from "../../../../constants/levels";
function Content() {
  const { skill } = useSkill();
  const [search, setSearch] = useState("");
  const [level, setLevel] = useState("ALL");
  const options = [
    {
      title: "Tất cả",
      type: "ALL",
    },
    {
      title: "Cơ bản",
      type: LEVELS.BASIC,
    },
    {
      title: "Trung bình",
      type: LEVELS.INTERMEDIATE,
    },
    {
      title: "Nâng cao",
      type: LEVELS.ADVANCED,
    },
  ];
  console.log(level);
  const handleChange = (event) => {
    setSearch(event.target.value);
  };
  console.log(search);
  if (skill == null) {
    return <div>Không có</div>;
  }
  const filteredQuestions = skill.questions.filter((question) => {
    const matchesSearch = question.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesLevel = level === "ALL" || question.level === level;

    return matchesSearch && matchesLevel;
  });
  console.log("aaaaaaaaaaaa");
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.search}>
          <button>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
          <input
            type="text"
            placeholder="Tìm kiếm..."
            value={search}
            onChange={handleChange}
          />
        </div>

        <div className={styles.action}>
          {options.map((option) => (
            <button
              key={option.type}
              onClick={() => setLevel(option.type)}
              className={` ${option.type === level ? styles.active : ""}   ` }
            >
              {option.title}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.title}>
          {skill.logo && <img src={skill.logo} alt="logo" />}
          <div className={styles.name}>{skill.name}</div>
          <div className={styles.count}>{filteredQuestions.length} Câu hỏi</div>
        </div>
        <div className={styles.container}>
          {filteredQuestions.length > 0 ? (
            filteredQuestions.map((question) => (
              <Question key={question.id} question={question} />
            ))
          ) : (
            <p className={styles.noResult}>Không tìm thấy câu hỏi phù hợp.</p>
          )}
        </div>
      </div>
    </div>
  );
}
export default Content;
