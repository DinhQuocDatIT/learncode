import { Link } from "react-router-dom";
import skills from "../../../constants/skill";
import styles from "./Header.module.css";

function Header() {
  const handldeNotifi = () => {
    alert("Xin lỗi nhìu nhé, Admin đang làm nhoa");
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <span className={styles.title1}>Kiến thức</span>
        <span className={styles.title2}>Công nghệ thông tin</span>
        <span className={styles.course}>HTML · CSS · JS · TS · React </span>
        <div className={styles.action}>
        
          <Link to={"/"} onClick={handldeNotifi}>
            {" "}
            Bài viết
          </Link>
          <Link to={"/profile"}> Profile</Link>
        </div>
      </div>
      <div className={styles.stats}>
        <div>
          <span className={styles.quantities}>{skills[0].count}</span>
          <span className={styles.name}>Câu hỏi</span>
        </div>
        <div>
          <span className={styles.quantities}>{skills.length - 1}</span>
          <span className={styles.name}>Chủ đề</span>
        </div>
        <div className={styles.describe}>
          "Nơi tổng hợp những kiển thức tinh hoa, được chọn lọc kỹ lưỡng dành
          cho các nhà phát triển hiện đại."
        </div>
      </div>
    </div>
  );
}
export default Header;
