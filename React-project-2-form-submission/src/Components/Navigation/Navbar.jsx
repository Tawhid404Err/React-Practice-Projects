import Logo from "../../../public/logo.png";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={`${styles.navigation} uni_class`}>
      <div className="image_container">
        <img src={Logo} alt="" />
      </div>

      <ul className={styles.nav_links}>
        <li>
          <a href="">HOME</a>
        </li>
        <li>
          <a href="">CONTACT</a>
        </li>
        <li>
          <a href="">ABOUT</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
