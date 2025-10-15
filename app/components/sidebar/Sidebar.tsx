"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import styles from "./sidebar.module.css";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className={styles.sidebar}>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li
            className={clsx(styles.li, {
              [styles.active]: pathname === "/dashboard/analysis",
            })}
          >
            <i className="fa-solid fa-chart-line"></i>
            <Link href="/dashboard/analysis">Analysis</Link>
          </li>

          <li
            className={clsx(styles.li, {
              [styles.active]: pathname === "/dashboard/reports",
            })}
          >
            <i className="fa-regular fa-file-lines"></i>
            <Link href="/dashboard/reports">Reports</Link>
          </li>

          <li
            className={clsx(styles.li, {
              [styles.active]: pathname === "/dashboard/inventory",
            })}
          >
            <i className="fa-solid fa-boxes-stacked"></i>
            <Link href="/dashboard/inventory">Inventory</Link>
          </li>

          <li
            className={clsx(styles.li, {
              [styles.active]: pathname === "/dashboard/history",
            })}
          >
            <i className="fa-solid fa-clock-rotate-left"></i>
            <Link href="/dashboard/history">Supply History</Link>
          </li>

          <li
            className={clsx(styles.li, {
              [styles.active]: pathname === "/dashboard/staffs",
            })}
          >
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
        <div className={styles.viewProfileContent}>
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
