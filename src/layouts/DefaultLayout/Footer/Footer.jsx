import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTiktok,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import styles from "./Footer.module.css";
function Footer() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.contact}>
        <div className={styles.contact1}>
          <span className={styles.title}>Địa chỉ liên hệ</span>
          <span>
            <FontAwesomeIcon icon={faAt} />
            dinhquocdat2005thdgli@gmail.com
          </span>

          <a
            href="https://github.com/DinhQuocDatIT"
            target="_blank"
            title="Vietnix"
          >
            <FontAwesomeIcon icon={faGithub} />
            https://github.com/DinhQuocDatIT
          </a>
        </div>
        <div className={styles.contact2}>
          <a
            href="https://www.facebook.com/quoc.at.145458?locale=vi_VN"
            target="_blank"
            title="Vietnix"
          >
            <FontAwesomeIcon icon={faFacebook} className={styles.facebook} />
          </a>
          <a
            href="https://www.instagram.com/quocdat536/"
            target="_blank"
            title="Vietnix"
          >
            <FontAwesomeIcon icon={faInstagram} className={styles.instagram} />
          </a>
          <a
            href="https://www.tiktok.com/@dat2k5cr7"
            target="_blank"
            title="Vietnix"
          >
            <FontAwesomeIcon icon={faTiktok} className={styles.tiktok} />
          </a>
        </div>
      </div>
    </div>
  );
}
export default Footer;
