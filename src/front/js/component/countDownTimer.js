import React from "react";

const CountdownTimer = () => {
    let days = Math.floor((new Date("2024-10-01") - new Date()) / 86400000);
    let hours = Math.floor(((new Date("2024-10-01") - new Date()) % 86400000) / 3600000);
    let minutes = Math.floor((((new Date("2024-10-01") - new Date()) % 86400000) % 3600000) / 60000);
    let seconds = Math.floor(((((new Date("2024-10-01") - new Date()) % 86400000) % 3600000) % 60000) / 1000);

    return(
        <div className="countdownTimer">    
            <div className="countdownTimer__days">
                <div className="countdownTimer__days--numbers">{days}</div>
                <div className="countdownTimer__days--text">Days</div>
            </div>
            <div className="countdownTimer__hours">
                <div className="countdownTimer__hours--numbers">{hours}</div>
                <div className="countdownTimer__hours--text">Hours</div>
            </div>
            <div className="countdownTimer__minutes">
                <div className="countdownTimer__minutes--numbers">{minutes}</div>
                <div className="countdownTimer__minutes--text">Minutes</div>
            </div>
            <div className="countdownTimer__seconds">
                <div className="countdownTimer__seconds--numbers">{seconds}</div>
                <div className="countdownTimer__seconds--text">Seconds</div>
            </div>
        </div>
    )
  
}

export default CountdownTimer;