// import Image from "next/image";
import Image from "next/image";
import styles from "./sidebar.module.css";
import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <i className="fa-solid fa-chart-line"></i>
            <Link href="/dashboard/analysis">Analysis</Link>
          </li>
          <li className={styles.li}>
            <i className="fa-regular fa-file-lines"></i>
            <Link href="/dashboard/reports">Reports</Link>
          </li>
          <li className={styles.li}>
            <i className="fa-solid fa-boxes-stacked"></i>
            <Link href="/dashboard/inventory">Inventory</Link>
          </li>
          <li className={styles.li}>
            <i className="fa-solid fa-clock-rotate-left"></i>
            <Link href="/dashboard/history">Supply History</Link>
          </li>
          <li className={styles.li}>
            <i className="fa-regular fa-user"></i>
            <Link href="/dashboard/staffs">Staffs</Link>
          </li>
        </ul>
      </nav>

      <div className={styles.supportCard}>
        <p className={styles.helpTitle}>Need Help?</p>
        <p className={styles.helpText}>
          We provide assistance to walk you through any queries or issues.
        </p>
        <button className={styles.supportBtn}>Contact Support</button>
      </div>
      <div className={styles.viewProfile}>
        <Image
          src="/images/hospital.png"
          width={35}
          height={35}
          alt="hospital icon"
          className={styles.hospitalIcon}
        />
        <div className="viewProfileContent">
          <p className={styles.hospitalName}>LAGOS STATE TEACHING HOSPITAL</p>
          <Link href="/profile" className={styles.profileLink}>
            Click to view profile
          </Link>
        </div>
      </div>
    </aside>
  );
};
export default Sidebar;
