import {  CREATE_FETCH } from '../actions/types'

const initialState = {
  answer: {}
}

export default function(state = initialState, action){
  switch(action.type){
    case CREATE_FETCH:
    console.log(action);
      return {
        ...state,
        answer: action.payload
      }
      case "REMOVE_ANSWER":
      console.log("in reducer");
        return {
          ...state,
          answer: {}
        }
    default:
      return state;
  }
}
