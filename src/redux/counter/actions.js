import { createAction } from '@reduxjs/toolkit'
// import { CHANGE_INPUT, MINUS, PLUS, RESET } from './constants'

// Action Creators
// export const increment = () => ({ type: PLUS })
// export const decrement = () => ({ type: MINUS })
// export const reset = () => ({ type: RESET })
// export const changeStep = step => ({ type: CHANGE_INPUT, payload: step })

export const increment = createAction('plus')
export const decrement = createAction('minus')
export const reset = createAction('reset')
export const changeStep = createAction('changeStep')

// console.log(increment())
// console.log(increment(21))
// console.log(increment('test payload'))
// console.log(increment({ user: { name: 'Alex' } }))
// console.log(increment(['hello']))
