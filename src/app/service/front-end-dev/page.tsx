import React from 'react';
import Link from 'next/link';
import style from './front.module.css'

const FrontendDev = () => {
  return (
    <section>
    <div className={style.head}>
      <h1 >THIS IS  FRONTEND DEV NESTED PAGE</h1>
    </div>
    <div className={style.navbar}>
      <Link href="/">
        BACK TO HOME
      </Link> <br />
      <Link href="../service" className={style.navbar1}>
        BACK TO SERVICE PAGE
      </Link>
    </div>
  </section>
  )
}

export default FrontendDev
