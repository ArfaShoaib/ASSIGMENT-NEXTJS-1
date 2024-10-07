import React from "react";
import styles from "./about.module.css";
import Link from "next/link";

const AboutPage = () => {
  return (
    <section>
      <div>
        <h1 className={styles.head}>THIS IS ABOUT PAGE</h1>
      </div>
      <div>
        <Link href="/" className={styles.navbar}>
          BACK TO HOME
        </Link>
      </div>
    </section>
  );
};

export default AboutPage;
