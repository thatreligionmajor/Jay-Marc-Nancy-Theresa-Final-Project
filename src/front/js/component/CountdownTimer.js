import React from "react";
import propTypes from "prop-types";

export const CountdownTimer = (props) => {
    let days = Math.floor((new Date("2024-10-01") - new Date()) / 86400000);
    let hours = Math.floor(((new Date("2024-10-01") - new Date()) % 86400000) / 3600000);
    let minutes = Math.floor((((new Date("2024-10-01") - new Date()) % 86400000) % 3600000) / 60000);
    let seconds = Math.floor(((((new Date("2024-10-01") - new Date()) % 86400000) % 3600000) % 60000) / 1000);

    return (
        <></>
    );

};

CountdownTimer.propTypes = {
    days: propTypes.number,
    hours: propTypes.number,
    minutes: propTypes.number,
    seconds: propTypes.number
};