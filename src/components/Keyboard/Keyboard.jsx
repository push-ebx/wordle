import React from 'react';
import styles from './index.module.css'
import Row from "./Row";

function Keyboard() {
  const keyboard = [
      ['й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш',' щ', 'з',' х', 'ъ'],
      ['ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л',' д', 'ж',' э'],
      ['←', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б',' ю', '⏎']
  ]
  return (
    <div className={styles.keyboard}>
      {
        keyboard.map((row, index) => <Row key={index} keys={row}/>)
      }
    </div>
  );
}

export {Keyboard};