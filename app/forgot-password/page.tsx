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
          <span className={styles.span}>
            Request a password reset to access your dashboard
          </span>
          <form className={styles.form}>
            <label className={styles.label} htmlFor="email">
              Email Address
            </label>
            <input
              className={styles.input}
              type="email"
              placeholder="Email Address"
              required
            />
            <div className={styles.links}>
              <span className={styles.rememberPassword}>
                I remember my password!
              </span>
              <Link className={styles.forgotPassword} href="/register">
                Log In
              </Link>
            </div>
            <button className={styles.button} type="submit">
              Request Passsword Reset
            </button>
            <span className={styles.newToMediTrack}>
              New to MediTrack? <Link className={styles.request} href="/request">Request Demo</Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ForgotPassword;
