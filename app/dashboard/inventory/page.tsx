import Header from "@/app/components/header/Header";
import styles from "./page.module.css";
import Sidebar from "@/app/components/sidebar/Sidebar";

const Inventory = () => {
  return (
    <div className={styles.inventory}>
      <Header />
      <div className={styles.inventoryContent}>
        <Sidebar />
        <div className={styles.welcome}>
          <h3 className={styles.h3}>Inventory</h3>
          <p className={styles.subTitle}>
            Here are the weekly analysis for your usage & supplies
          </p>
        </div>
      </div>
    </div>
  );
};
export default Inventory;
