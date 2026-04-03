import skills from "../../../../constants/skill";
import { useSkill } from "../../../../hooks/SkillContext";
import styles from "./Sidebar.module.css";
function Sidebar() {
  const { skill, setSkill } = useSkill();
  return (
    <div className={styles.wrapper}>
      {skills.map((typeSkill) => (
        <button
          key={typeSkill.id}
          onClick={() => setSkill(typeSkill)}
          className={`${typeSkill.id === skill.id ? styles.active : ""}`}
        >
          {typeSkill.logo && <img src={typeSkill.logo} alt="logo" />}

          <div className={styles.name}>{typeSkill.name}</div>
          <div className={styles.count}>{typeSkill.count}</div>
        </button>
      ))}
    </div>
  );
}
export default Sidebar;
