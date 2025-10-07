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
          <form className={styles.form}>
            <input
              className={styles.input}
              type="email"
              placeholder="Email Address"
              required
            />
            <input
              className={styles.input}
              type="password"
              placeholder="Password"
              required
            />
            <button className={styles.button} type="submit">
              Login
            </button>
            <div className={styles.links}>
              <Link className={styles.a} href="/forgot-password">
                Forgot Password?
              </Link>
              <Link className={styles.a} href="/register">
                Create Account
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Login