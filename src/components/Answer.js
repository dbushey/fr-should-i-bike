import React, { Component } from 'react'
import { connect } from 'react-redux'

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

//


class Answer extends Component {

  render(){
    console.log(this.props.answer)
    console.log(typeof this.props.answer.final_answer);
    const icon = this.props.answer.origin_icon
    console.log(typeof icon);
    // icon.toUpperCase()

    return(
      <div id="results">
        <h1>{this.props.answer.final_answer}</h1>

        <ReactAnimatedWeather
          icon={icon}
          color={'blue'}
          size={200}
          animate={true}
        />
      </div>
    )
  }
}

function mapStateToProps(state){
  return {answer: state.answer}
}

export default connect(mapStateToProps)(Answer)
