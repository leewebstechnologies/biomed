"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

const Login = () => {
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
          <h2 className={styles.h2}>Login to MediTrack</h2>
          <span className={styles.span}>
            Securely access your medical institution MediTrack account
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
            <label className={styles.label} htmlFor="password">
              Password
            </label>
            <input
              className={styles.input}
              type="password"
              placeholder="Password"
              required
            />
            <div className={styles.links}>
              <Link className={styles.account} href="/forgot-password">
                Unable to access account?
              </Link>
              <Link className={styles.forgotPassword} href="/register">
                Forgot Password?
              </Link>
            </div>
            <button className={styles.button} type="submit">
              Log In
            </button>           
              <span className={styles.newToMediTrack}>
                New to MediTrack?<Link className={styles.request} href="/request"> Request Demo</Link>
              </span>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Login