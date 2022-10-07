import * as data from '../assets/words.json';

const defaultState = {
  board: new Array(6).fill(new Array(5).fill({char: '', color: ''})),
  row: 0,
  col: 0,
  word: data[new Date().getDate()-1],
  is_win: false
}

const SET_CHAR = "SET_CHAR";
const SET_WORD = "SET_WORD";
const DELETE = "DELETE";

const checkWord = (state) => {
  if (state.row <= 6) {
    const user_word = state.board[state.row].map(c=>c.char).join('').toUpperCase();
    state.board[state.row].forEach((cell, i) => {
      let j = state.word.indexOf(cell.char);
      if (j > -1) {
        if (i === j) {
          state.board[state.row][i].color = "#6aaa64"
        } else {
          state.board[state.row][i].color = "#c9b458"
        }
      }
      else {
        state.board[state.row][i].color = "#787c7e"
      }
    })
    state.is_win = user_word === state.word.toUpperCase()
  }
}

export const boardReducer = (state=defaultState, action) => {
  switch (action.type) {
    case SET_CHAR:
      if (state.col === 5 || state.row === 6) return {...state}
      let prev_board = JSON.parse(JSON.stringify(state.board))
      prev_board[state.row][state.col].char = action.payload.char
      return {...state, board: prev_board, col: state.col + 1}
    case SET_WORD:
      checkWord(state)
      return {...state, col: 0, row: state.row + 1}
    case DELETE:
      if (state.col === 0 || state.row === 6) return {...state}
      let prev = JSON.parse(JSON.stringify(state.board))
      prev[state.row][state.col - 1] = {}
      return {...state, board: prev, col: state.col-1}
    default:
      return state
  }
}

export const setCharAction = payload => ({type: SET_CHAR, payload})
export const setWordAction = payload => ({type: SET_WORD, payload})
export const deleteAction = payload => ({type: DELETE, payload})