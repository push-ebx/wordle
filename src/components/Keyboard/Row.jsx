import React from 'react';
import styles from './index.module.css'
import Key from "./Key";

const Row = ({keys}) => {
  return (
    <div className={styles.row}>
      {keys.map((key, index) => <Key key={index} char={key}/>)}
    </div>
  );
};

export default Row;