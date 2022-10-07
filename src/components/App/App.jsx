import React, {useEffect, useRef} from 'react';
import styles from './index.module.css'
import Keyboard from "../Keyboard";
import Grid from "../Board";
import Header from "../Header";
import {useDispatch, useSelector} from "react-redux";
import {deleteAction, setCharAction, setWordAction} from "../../store/boardReducer";
import Confetti from 'react-confetti'

function App() {
  const dispatch = useDispatch()
  const boardState = useSelector(state => state.boardReducer)
  const appRef = useRef(null)

  useEffect(() => {
    appRef && appRef.current.focus()
  }, [])

  const keyUpHandler = (e) => {
    if (boardState.is_win) return
    if (e.key === 'Enter') {
      if (boardState.col === 5) {
        dispatch(setWordAction())
      } else {
        console.log("В слове недостаточно букв")
      }
    } else if (e.key === 'Backspace') {
      dispatch(deleteAction())
    } else if (e.key >= 'А' && e.key <= 'я') {
      dispatch(setCharAction({char: e.key}))
    }
    if (boardState.is_win) console.log("win")
  }

  return (
    <div tabIndex={0} className={styles.app} ref={appRef} onKeyUp={keyUpHandler}>
      <Header />
      <div className={styles.game}>
        <Grid />
        <Keyboard />
      </div>
      {
        boardState.is_win
          &&
        <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            numberOfPieces={2000}
            tweenDuration={70000}
            recycle={false}
            gravity={0.1}
        />
      }
    </div>
  );
}

export {App};