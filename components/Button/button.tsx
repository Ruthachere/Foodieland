import React from 'react'
import styles from "../Button/button.module.css"
import { FaClock } from 'react-icons/fa'
import { FcAlarmClock } from 'react-icons/fc'
import { CiForkAndKnife } from 'react-icons/ci'

const Button = () => {
  let style = {
        fontSize:'20px',
        color: 'black'
  }
  return (
    <div className={styles.btnContainer}>
        <button className= {styles.timeBtn}>
          <FaClock style={style}/>
            <span>30 Minutes</span>
        </button>

        <button className={styles.mealBtn}>
          <CiForkAndKnife style={style}/>
            <span>Chicken</span>
        </button>
    </div>
  )
}

export default Button