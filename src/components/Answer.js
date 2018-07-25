import React, {Component} from 'react'

// import Skycons from 'react-skycons'
import ReactAnimatedWeather from 'react-animated-weather';

// ReactAnimatedWeather.defaultProps = {
//   animate: true,
//   size: 64,
//   color: 'black'
// };

// ReactAnimatedWeather.propTypes = {
//   icon: PropTypes.oneOf([
//     'CLEAR_DAY',
//     'CLEAR_NIGHT',
//     'PARTLY_CLOUDY_DAY',
//     'PARTLY_CLOUDY_NIGHT',
//     'CLOUDY',
//     'RAIN',
//     'SLEET',
//     'SNOW',
//     'WIND',
//     'FOG'
//   ]).isRequired,
//   animate: PropTypes.bool,
//   size: PropTypes.number,
//   color: PropTypes.string
// };


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
