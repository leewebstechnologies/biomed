import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
const ForgotPassword = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}></div>
      <div className={styles.right}>
        <div className={styles.formBox}>
          <Image
            src="/images/logo.png"
            alt="Tido Biomed Logo"
            className={styles.logo}
            width={124}
            height={63}
          />
          <h2 className={styles.h2}>Forgot Password</h2>
          <p className={styles.desc}>
            Enter your registered email to reset your password.
          </p>
          <form className={styles.form}>
            <input
              className={styles.input}
              type="email"
              placeholder="Email Address"
              required
            />
            <button className={styles.button} type="submit">
              Reset Password
            </button>
          </form>
          <Link href="/login" className={styles.backLink}>
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ForgotPassword;
