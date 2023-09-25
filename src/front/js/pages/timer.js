import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";


export const Timer = (props) => {
	const { store, actions } = useContext(Context);

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

Timer.propTypes = {
    days: propTypes.number,
    hours: propTypes.number,
    minutes: propTypes.number,
    seconds: propTypes.number
};
