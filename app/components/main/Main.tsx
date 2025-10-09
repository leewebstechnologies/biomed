import Image from "next/image";
import styles from "./main.module.css";

const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.welcome}>
        <h3 className={styles.h3}>Welcome Back, Emmanuel 👋</h3>
        <p className={styles.subtitle}>What would you like to do today?</p>
      </div>

      <div className={styles.stock}>
        <div className={styles.stockCard}>
          <div className={styles.stockCardTop}>
            <h4 className={styles.stockTitle}>Total Supplies</h4>
            <Image
              src="/images/uil_medical.png"
              width={24}
              height={24}
              alt="stock card icon"
            />
          </div>
          <div className={styles.stockCardBottom}>
            <p className={styles.stockValue}>1,200</p>
            <p className={styles.stockReport}>
              <span className={styles.span}>+10%</span> Compared to Last week
            </p>
          </div>
        </div>
        <div className={styles.stockCard}>
          <div className={styles.stockCardTop}>
            <h4 className={styles.stockTitle}>Low Stock</h4>
            <Image
              src="/images/alert.png"
              width={24}
              height={24}
              alt="stock card icon"
            />
          </div>
          <div className={styles.stockCardBottom}>
            <p className={styles.stockValue}>20</p>
            <p className={styles.stockReport}>
              <span className={styles.span}>-5%</span> Compared to Last week
            </p>
          </div>
        </div>
        <div className={styles.stockCard}>
          <div className={styles.stockCardTop}>
            <h4 className={styles.stockTitle}>Out of Stock</h4>
            <Image
              src="/images/trend.png"
              width={24}
              height={24}
              alt="stock card icon"
            />
          </div>
          <div className={styles.stockCardBottom}>
            <p className={styles.stockValue}>20</p>
            <p className={styles.stockReport}>
              <span className={styles.span}>+2%</span> Compared to Last week
            </p>
          </div>
        </div>
        <div className={styles.stockCard}>
          <div className={styles.stockCardTop}>
            <h4 className={styles.stockTitle}>Expiring Soon</h4>
            <Image
              src="/images/timer.png"
              width={24}
              height={24}
              alt="stock card icon"
            />
          </div>
          <div className={styles.stockCardBottom}>
            <p className={styles.stockValue}>50</p>
            <p className={styles.stockReport}>
              <span className={styles.span}>-10%</span> Compared to Last week
            </p>
          </div>
        </div>
      </div>
      <div className={styles.cardTop}>
        <div className={styles.cardLeft}></div>
        <div className={styles.cardRight}></div>
      </div>

      <div className={styles.cardBottom}></div>

    </div>
  );
}
export default Main