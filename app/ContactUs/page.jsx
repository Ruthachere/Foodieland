import React from 'react'
import Image from 'next/image'
import chef from '../../public/images/chef.png'
import Form from '../../components/form/Form'
import styles from './page.module.css'
import Inbox from '../../components/inboxSection/inbox'

const ContactUs = () => {
  return (
    <div>
      <h2 className={styles.title}>Contact Us</h2>
      <div className={styles.headerContent}>
        <Image
          src={chef}
          alt='Image of a Chef'
          width={400}
          height={400}
        />
        <Form />
      </div>
      <div>
        <Inbox />
      </div>
    </div>
  )
}

export default ContactUs