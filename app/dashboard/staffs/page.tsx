import Header from "@/app/components/header/Header";
import styles from "./page.module.css";
import Sidebar from "@/app/components/sidebar/Sidebar";

const Staffs = () => {
  return (
    <div className={styles.staffs}>
      <Header />
      <div className={styles.staffsContent}>
        <Sidebar />
        <div className={styles.welcome}>
          <h3 className={styles.h3}>Staffs</h3>
          <p className={styles.subTitle}>
            Here are the weekly analysis for your usage & supplies
          </p>
        </div>
      </div>
    </div>
  );
}
export default Staffs