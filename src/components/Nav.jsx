import styles from "./Nav.module.css";

export default function Nav({ children }) {
  return <div className={styles.nav}>{children}</div>;
  
}
