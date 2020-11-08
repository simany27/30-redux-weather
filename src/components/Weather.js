import React from 'react';

const Weather = (props) => {
    if (props.message) {
        return(
            <div>
                <p>{props.message}</p>
            </div>
        )
    } else {
        return (
            <div className='infoWeath'>
                <p>Location: {props.city}, {props.country}</p>
                <p>Temperature: {props.temp}</p>
                <p>Pressure: {props.pressure}</p>
                <p>Sunset: {new Date (props.sunset*1000).toString()}</p>
            </div>
        );
    }
}

export default Weather;