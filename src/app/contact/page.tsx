import React from "react";
import Link from "next/link";
import css from "./contact.module.css";

const ContactPage = () => {
  return (
    <section>
      <div>
        <h1 className={css.heading}>THIS IS CONTACT PAGE</h1>
      </div>
      <div>
        <Link href="/" className={css.nav}>
          BACK TO HOME
        </Link>
      </div>
    </section>
  );
};

export default ContactPage;
