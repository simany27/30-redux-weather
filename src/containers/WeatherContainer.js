import {connect} from "react-redux";
import Weather from '../components/Weather'

function mapStateToProps(state){
    return {
        city: state.weatherInfo.city,
        country: state.weatherInfo.country,
        temp:state.weatherInfo.temp,
        pressure: state.weatherInfo.pressure,
        sunset: state.weatherInfo.sunset,
        message: state.message
    }
}

export default connect(mapStateToProps)(Weather);