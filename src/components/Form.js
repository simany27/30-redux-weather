import React, {Component} from 'react';

const Form = props => {

        return (
            <div>
                <input
                    defaultValue={props.city}
                    onChange={event => props.changeCity(event.target.value)}
                    type='text'
                    placeholder='city'/>
                <button
                    onClick={() => props.getWeather(props.city)}
                >Get Weather</button>
            </div>
        );
    }


export default Form;