import {  CREATE_FETCH } from './types'

export const createFetch = (origin, destination) => dispatch => {

    const url = `http://localhost:3000/direction?origin=${origin.split(' ').join('+')}&destination=${destination.split(' ').join('+')}&departure_time=now
    `

    return fetch(url)
    .then(resp => resp.json())
    .then(answer =>
      dispach({
      type: FETCH_WEATHER,
      payload: answer
    }))

    // {origin: "1311 Putnam Ave",
    // destination: "81 Prospect St",
    // showAnswer: true,
    // final_answer: "Yes",
    // summary: "Humid and Mostly Cloudy",
    // icon:"partly-cloudy-day"}

}
