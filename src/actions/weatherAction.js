import {apiKey, baseURL, metric} from "../utils/Constants";

export const GET_WEATHER = 'GET_WEATHER';
export const LOAD_WEATHER = 'LOAD_WEATHER';
export const ERROR_CITY = 'ERROR_CITY';
export const CHANGE_CITY = 'CHANGE_CITY';
export const MESSAGE = 'MESSAGE';

export const weatherAction = weatherInfo => ({
    type: GET_WEATHER,
    payload: weatherInfo
})

export const changeCity = (city) => ({
    type: CHANGE_CITY,
    payload: city
})

export const errorCity = () => ({
    type: ERROR_CITY,
    payload: 'Enter correct city name'
})

export const loadWeather = () => ({
    type: LOAD_WEATHER,
    payload: 'Wait...'
})

export const changeMessage = (message) => ({
    type: MESSAGE,
    payload: message
})

export const getWeather = (city) => {
    return dispatch => {
        dispatch(loadWeather());
        let weatherInfo={};
        fetch(`${baseURL}${city}${metric}${apiKey}`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {throw new Error('' + response.status)}})
            .then(data => {
                    weatherInfo = {
                    city: data.name,
                    country: data.sys.country,
                    temp: data.main.temp,
                    pressure: data.main.pressure,
                    sunset: data.sys.sunset
                };
                dispatch(changeMessage(null));
            })
            .then(() => dispatch(weatherAction(weatherInfo)))
            .catch(e => dispatch(errorCity()));
    }
}

