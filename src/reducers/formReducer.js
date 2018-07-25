import {  CREATE_FETCH } from '../actions/types'

const initialState = {
  user_input: {origin: '', destination: ''}
  // origin: '1311 Putnam Ave',
  // destination: '81 Prospect St',
  //switch
  answer :
  {  showAnswer: false,
  //from dark sky answer: {final_answer: null, summary: null, icon: null}
  final_answer: null,
  summary: null,
  icon: null }
}

export default function(state = initialState, action){
  switch(action.type){
    case CREATE_FETCH:
      return {
        ...state,
        user_input: action.payload.user_input
      }
    default:
      return state;
  }
}
