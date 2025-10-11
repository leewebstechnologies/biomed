import Header from "@/app/components/header/Header";
import styles from "./page.module.css";
import Sidebar from "@/app/components/sidebar/Sidebar";

const Reports = () => {
  return (
    <div className={styles.reports}>
      <Header />
      <div className={styles.reportsContent}>
        <Sidebar />
        <div className={styles.welcome}>
          <h3 className={styles.h3}>Report</h3>
          <p className={styles.subTitle}>
            Here are the weekly reports for your usage & supplies
          </p>
        </div>
      </div>
    </div>
  );
};
export default Reports;
