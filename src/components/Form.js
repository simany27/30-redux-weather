import React from 'react';

const baseURL = 'http://api.openweathermap.org/data/2.5/weather?q='
const metric = '&units=metric';
const apiKey = '&appid=3e24692bc68386252759f1490afc6635';

const Form = () => {
    const handleSubmitWeather = (event) => {
        event.preventDefault(); //отменить дефолтное поведение
        const city = event.currentTarget.city.value.trim(); //объект, на котором сработало событие
        fetch(`${baseURL}${city}${metric}${apiKey}`)
            .then(response => {
                if(response.ok){
                    return response.json();
                }else{
                    throw new Error(''+response.status);
                }
            })
            .then(response => console.log(response.main.temp));
    }
    return (
        <form onSubmit={handleSubmitWeather}>
            <input type='text' name='city' placeholder='City'/>
            <button type='submit'>Get weather</button>
        </form>
    );
};

export default Form;