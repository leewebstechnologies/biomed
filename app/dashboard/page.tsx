import styles from "./page.module.css";

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <h2>Tido Biomed</h2>
        <ul>
          <li>Reports</li>
          <li>Inventory</li>
          <li>Activity</li>
          <li>Profile</li>
        </ul>
      </aside>
      <main className={styles.main}>
        <header className={styles.header}>
          <h3>Welcome Back, Emmanuel 👋</h3>
        </header>
        <section className={styles.cards}>
          <div className={styles.card}>1,200 Total Reports</div>
          <div className={styles.card}>20 Pending</div>
          <div className={styles.card}>50 Completed</div>
        </section>
      </main>
    </div>
  );
}
export default Dashboard