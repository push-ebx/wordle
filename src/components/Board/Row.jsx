import React from 'react';
import styles from './index.module.css'
import Cell from "./Cell";

const Row = ({row}) => {
  return (
      <div className={styles.row}>
        {
          row.map((cell, index) => <Cell key={index} is_active={true} cell={cell}/>)
        }
      </div>
  );
};

export default Row;