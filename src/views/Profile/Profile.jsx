import { AboutMe, HeaderProfile, Skills } from "../../components/Profile";
import styles from "./Profile.module.css";
function Profile() {
  return (
    <div className={styles.wrapper}>
      <header>
        <HeaderProfile />
      </header>
      <AboutMe />
      <Skills />
    </div>
  );
}
export default Profile;
