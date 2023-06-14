import React, { useState } from 'react'
import styles from './styles.module.css'

export const Button = (props) => {
  return (
    <button
      {...props}
      className={`${styles.btn} ${styles[props.color]} ${styles[props.type]} ${
        props.disabled ? 'btn-disabled' : ''
      }`}
      disabled={props.disabled}
    >
      {props.text}
    </button>
  )
}
