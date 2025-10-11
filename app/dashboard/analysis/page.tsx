import Header from "@/app/components/header/Header";
import styles from "./page.module.css";
import Sidebar from "@/app/components/sidebar/Sidebar";

const Analysis = () => {
  return (
    <div className={styles.analysis}>
      <Header />
      <div className={styles.analysisContent}>
        <Sidebar />
        <div className={styles.welcome}>
          <h3 className={styles.h3}>Analysis</h3>
          <p className={styles.subTitle}>
            Here are the weekly analysis for your usage & supplies
          </p>
        </div>
      </div>
    </div>
  );
}
export default Analysis