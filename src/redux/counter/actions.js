import { CHANGE_INPUT, MINUS, PLUS, RESET } from './constants'

// Action Creators
export const increment = () => ({ type: PLUS })
export const decrement = () => ({ type: MINUS })
export const reset = () => ({ type: RESET })
export const changeStep = step => ({ type: CHANGE_INPUT, payload: step })
