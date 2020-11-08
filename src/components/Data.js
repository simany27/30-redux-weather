import React, {Component} from 'react';
import Form from "../containers/FormContainer";
import Weather from "../containers/WeatherContainer";

const Data = props => {

        return (
            <div>
                <Form/>
                <Weather/>
            </div>
        );
    }

export default Data;

