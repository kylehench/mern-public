import React from 'react'
import styles from './styles.module.css'

const Main = (props) => {
  return (
    <div className={styles.main}>
      <div className={styles.row}>
        { props.children }
      </div>
      { props.ad }
    </div>
  )
}

export default Main