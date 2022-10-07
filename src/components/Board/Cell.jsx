import React from 'react';
import styles from './index.module.css'

const Cell = ({cell}) => {
  return (
    <div style={{background: cell.color,
                color: cell.color ? "#fff" : "#000",
                borderColor: cell.color && "transparent" || cell.char && "#878a8c"
          }}
         className={`${styles.cell} ${cell.char && styles.active_cell}`}>
      {cell.char}
    </div>
  );
};

export default Cell;