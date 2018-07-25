import React, {Component} from 'react'

// import Skycons from 'react-skycons'
import ReactAnimatedWeather from 'react-animated-weather';



class Answer extends Component {
  render(){
    return(
      <div id="results">
        <h1>NO!</h1>
        <ReactAnimatedWeather
          icon={'RAIN'}
          color={'blue'}
          size={200}
          animate={true}
        />
      </div>
    )
  }
}

export default Answer
