import React from 'react';
import styles from './index.module.css'
import {useDispatch, useSelector} from "react-redux";
import {deleteAction, setCharAction, setWordAction} from "../../store/boardReducer";

const Key = ({char}) => {
  const dispatch = useDispatch()
  const boardState = useSelector(state => state.boardReducer)

  const keyClickHandler = e => {
    if (boardState.is_win) return
    console.log(boardState.is_win)
    if (e.target.textContent === '⏎') {
      if (boardState.col === 5) {
        dispatch(setWordAction())
      } else {
        console.log(boardState.col)
        console.log("В слове недостаточно букв")
      }
      return
    }
    if (e.target.textContent === '←') {
      dispatch(deleteAction())
      return;
    }
    dispatch(setCharAction({char: e.target.textContent}))
  }

  return (
    <button onClick={keyClickHandler} className={styles.key}>
      {char}
    </button>
  );
};

export default Key;