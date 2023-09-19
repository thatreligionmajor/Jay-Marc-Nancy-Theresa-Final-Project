import React from "react";
import propTypes from "prop-types";

export const CountdownTimer = (props) => {
    let days = Math.floor((new Date("2024-10-01") - new Date()) / 86400000);
    let hours = Math.floor(((new Date("2024-10-01") - new Date()) % 86400000) / 3600000);
    let minutes = Math.floor((((new Date("2024-10-01") - new Date()) % 86400000) % 3600000) / 60000);
    let seconds = Math.floor(((((new Date("2024-10-01") - new Date()) % 86400000) % 3600000) % 60000) / 1000);

    return (
        <div className="countdownTimer">
            <div className="countdownTimer__days">
                <div className="countdownTimer__days--numbers">{props.days}</div>
                <div className="countdownTimer__days--text">Days</div>
            </div>
            <div className="countdownTimer__hours">
                <div className="countdownTimer__hours--numbers">{props.hours}</div>
                <div className="countdownTimer__hours--text">Hours</div>
            </div>
            <div className="countdownTimer__minutes">
                <div className="countdownTimer__minutes--numbers">{props.minutes}</div>
                <div className="countdownTimer__minutes--text">Minutes</div>
            </div>
            <div className="countdownTimer__seconds">
                <div className="countdownTimer__seconds--numbers">{props.seconds}</div>
                <div className="countdownTimer__seconds--text">Seconds</div>
            </div>
        </div>
    );

};

CountdownTimer.propTypes = {
    days: propTypes.number,
    hours: propTypes.number,
    minutes: propTypes.number,
    seconds: propTypes.number
};