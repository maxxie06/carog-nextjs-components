import styles from "../styles/ProfileCard.module.css";

export default function ProfileCard() {
  return (
    <div className={styles.courtCard}>
      <img
        src="dp.png"
        alt="profile"
        className={styles.playerImage}
      />
      <h3 className={styles.playerName}>Maxxie Jett N. Carog</h3>
      <p className={styles.playerAge}>Age: 19</p>
      <p className={styles.playerDesc}>
        Basketball keeps me active and happy
      </p>
    </div>
  );
}
