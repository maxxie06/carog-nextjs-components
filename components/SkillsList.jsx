import styles from "../styles/SkillsList.module.css";

export default function SkillsList() {
  return (
    <section className={styles.skillCourt}>
      <h3 className={styles.skillTitle}>Skills</h3>
      <ul className={styles.skillNet}>
        <li className={styles.skillBall}>JavaScript</li>
        <li className={styles.skillBall}>React</li>
        <li className={styles.skillBall}>Next.js</li>
      </ul>
    </section>
  );
}
