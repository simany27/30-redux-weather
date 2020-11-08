import {changeCity, getWeather} from "../actions/weatherAction";
import {connect} from "react-redux";
import Form from '../components/Form'

function mapStateToProps(state){
    return {
        city: state.city
    }
}

function mapDispatchToProps(dispatch){
    return {
        changeCity: city => dispatch(changeCity(city)),
        getWeather: city => dispatch(getWeather(city)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);