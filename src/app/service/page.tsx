import React from 'react'
import Link from 'next/link'
import css from './service.module.css'

const ServicePage = () => {
  return (
    <section>
      <div className={css.head}>
        <h1 >THIS IS SERVICE PAGE</h1>
      </div>
      <div className={css.navbar}>
        <Link href="/">
          BACK TO HOME
        </Link> <br />
        <div>
        <Link href="../service/front-end-dev">
          GO TO FRONTEND DEV NESTED PAGE
        </Link>
        </div>
      </div>
    </section>
  )
}

export default ServicePage
