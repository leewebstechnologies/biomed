import Image from "next/image";
import styles from "./header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.header}>
      {/* Logo */}
      <Link href="/dashboard/" className={styles.headerLeft}>
        <Image className={styles.logo} src="/images/logo.png" alt="Tido Logo" width={120} height={50} />
      </Link>

      {/* Right Section */}
      <div className={styles.headerRight}>
        <Link href="/" className={styles.bellContainer}>
          <i className={`fa-regular fa-bell ${styles.bellIcon}`}></i>
        </Link>

        <Link href="/" className={styles.profile}>
          <Image
            src="/images/profilePicture.png"
            alt="User"
            width={40}
            height={40}
            className={styles.profileImg}
          />
        </Link>
      </div>
    </header>
  );
};
export default Header;
