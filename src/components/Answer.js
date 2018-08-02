import React, { Component } from 'react'
import { connect } from 'react-redux'
import { removeAnswer } from '../actions/weatherActions'

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


  // componentDidUpdate(previousProps){
  //   if (this.props.answer !== {}){
  //     setTimeout(this.props.removeAnswer, 5000)
  //   }
  // }

  render(){
    console.log(this.props.answer)
    // {origin_icon: "PARTLY_CLOUDY_DAY",     origin_summary: "Humid and Partly Cloudy", dest_icon: "partly-cloudy-day",
    // dest_summary: "Humid and Partly Cloudy", final_answer: "Yes"}

    const {
      answer: {
        origin_icon,
        origin_summary,
        origin_temperature,
        dest_icon,
        dest_summary,
        final_answer,
        }
      } = this.props;



    return(
      <div id="results">
        <h1>{final_answer}</h1>
        <h3>{origin_summary}</h3>
        <h3>{origin_temperature}</h3>
        {final_answer ? <ReactAnimatedWeather
          icon={origin_icon}
          color={'blue'}
          size={200}
          animate={true}
                               />  : null}
      </div>
    )
  }
}

function mapStateToProps(state){
  return {answer: state.answer}
}

export default connect(mapStateToProps, { removeAnswer})(Answer)
