import { NavLink } from "react-router-dom";
import styles from "./NavButton.module.css";

export default function NavButton({ content, routeTo }) {
  return (
    <NavLink to={routeTo}>
      <button className={styles.button}>{content}</button>
    </NavLink>
  );
}
