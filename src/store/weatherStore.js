import {createStore, applyMiddleware} from "redux";
import React from "react";
import thunk from "redux-thunk";
import weatherReducer from "../reducers/weatherReducer";

const initialState = {message: 'Enter city name', city: 'city', weatherInfo: {}};

const store = createStore(weatherReducer, initialState, applyMiddleware(thunk));

export default store;