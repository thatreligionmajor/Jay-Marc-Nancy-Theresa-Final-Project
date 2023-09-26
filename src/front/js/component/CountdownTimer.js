import React, { Component } from 'react';
import rigoImageUrl from "../../img/rigo-baby.jpg";
// import daysImage from "../../img/days.png";


class CountdownTimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      targetDate: new Date("2024-05-23 23:59:59").getTime(), // Change this to your event's date
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.updateTime, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  updateTime = () => {
    const now = new Date().getTime();
    const timeRemaining = this.state.targetDate - now;

    if (timeRemaining <= 0) {
      clearInterval(this.interval);
      return;
    }

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    this.setState({ days, hours, minutes, seconds });
  };

  render() {
    const { days, hours, minutes, seconds } = this.state;
    return (
      <div>
        <h1>Countdown Timer</h1>
        <div className="timer">
          <div>
            <span>{days}</span> Days
          </div>
          <div>
            <span>{hours}</span> Hours
          </div>
          <div>
            <span>{minutes}</span> Minutes
          </div>
          <div>
            <span>{seconds}</span> Seconds
          </div>
        </div>
      </div>
    );
  }
}

export default CountdownTimer;





// import React from "react";
// import propTypes from "prop-types";

// export const CountdownTimer = (props) => {
//     let days = Math.floor((new Date("2024-10-01") - new Date()) / 86400000);
//     let hours = Math.floor(((new Date("2024-10-01") - new Date()) % 86400000) / 3600000);
//     let minutes = Math.floor((((new Date("2024-10-01") - new Date()) % 86400000) % 3600000) / 60000);
//     let seconds = Math.floor(((((new Date("2024-10-01") - new Date()) % 86400000) % 3600000) % 60000) / 1000);

//     return (
//         <></>
//     );

// };

// CountdownTimer.propTypes = {
//     days: propTypes.number,
//     hours: propTypes.number,
//     minutes: propTypes.number,
//     seconds: propTypes.number
// };