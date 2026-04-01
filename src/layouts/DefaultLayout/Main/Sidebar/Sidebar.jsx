import skills from "../../../../datas/skills";
import styles from "./Sidebar.module.css";
function Sidebar() {
  return (
    <div className={styles.wrapper}>
      {skills.map((skill) => (
        <button key={skill.id}>
          <img src={skill.logo} alt="logo" />
          <div className={styles.name}>{skill.name}</div>
        </button>
      ))}
    </div>
  );
}
export default Sidebar;
