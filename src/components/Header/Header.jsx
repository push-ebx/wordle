import React from 'react';
import styles from './index.module.css'

function Header() {
  return (
    <div className={styles.header}>
      <span style={{color: '#6aaa64'}}>W</span>ordle
    </div>
  );
}

export {Header};