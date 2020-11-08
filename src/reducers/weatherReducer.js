import {CHANGE_CITY, ERROR_CITY, GET_WEATHER, LOAD_WEATHER, MESSAGE} from '../actions/weatherAction'

function weatherReducer(state, action) {
    switch (action.type) {
        case GET_WEATHER:
            return {...state, weatherInfo: action.payload};
        case CHANGE_CITY:
            return {...state, city: action.payload};
        case LOAD_WEATHER:
        case MESSAGE:
        case ERROR_CITY:
            return {...state, message: action.payload};
        default:
            return state;
    }
}

export default weatherReducer;