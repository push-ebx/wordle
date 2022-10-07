import React from 'react';
import styles from './index.module.css'
import Row from "./Row";
import {useSelector} from "react-redux";

function Board() {
  const board = useSelector(state => state.boardReducer.board)

  return (
    <div className={styles.board}>
      {
        board.map((row, index) => <Row key={index} row={row}/>)
      }
    </div>
  );
}

export {Board};