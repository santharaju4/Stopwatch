// Write your code here
import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {isTimerRunning: false, timeElapsedInSeconds: 0}

  componentWillUnmount() {
    this.clearTimerInterval()
  }

  clearTimerInterval = () => clearInterval(this.timeInterval)

  onClickRestButton = () => {
    this.clearTimerInterval()
    this.setState({isTimerRunning: false, timeElapsedInSeconds: 0})
  }

  onClickStopButton = () => {
    this.clearTimerInterval()
    this.setState({isTimerRunning: false})
  }

  Value = () => {
    this.setState(prevState => ({
      timeElapsedInSeconds: prevState.timeElapsedInSeconds + 1,
    }))
  }

  onClickStartButton = () => {
    this.timeInterval = setInterval(this.Value, 1000)
    this.setState({isTimerRunning: true})
  }

  renderInSecondsValue = () => {
    const {timeElapsedInSeconds} = this.state
    const seconds = Math.floor(timeElapsedInSeconds % 60)
    console.log(seconds)
    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  renderInMinutesValue = () => {
    const {timeElapsedInSeconds} = this.state
    const minutes = Math.floor(timeElapsedInSeconds / 60)
    console.log(minutes)
    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  render() {
    const {isTimerRunning} = this.state

    const IntegerSecondsValue = this.renderInSecondsValue()
    const IntegerMinutesValue = this.renderInMinutesValue()

    return (
      <div className="app-container">
        <h1 className="title">Stopwatch</h1>
        <div className="timer-container">
          <div className="timer-display-container">
            <p className="timer-title">Timer</p>
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt=" stopwatch"
              className="time-logo"
            />
          </div>
          <h1 className="stopwatch ">
            {IntegerMinutesValue}:{IntegerSecondsValue}
          </h1>
          <div className="button-control">
            <button
              className="start-button"
              type="button"
              onClick={this.onClickStartButton}
              disabled={isTimerRunning}
            >
              Start
            </button>
            <button
              className="stop-button"
              type="button"
              onClick={this.onClickStopButton}
            >
              Stop
            </button>
            <button
              className="reset-button"
              type="button"
              onClick={this.onClickRestButton}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
