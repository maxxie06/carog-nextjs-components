import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.ballHeader}>
      <h1 className={styles.pageTitle}>My Profile</h1>
      <h2 className={styles.subTitle}>Maxxie Jett N. Carog</h2>
    </header>
  );
}
