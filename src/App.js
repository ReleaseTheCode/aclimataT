import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SearchForm from './components/SearchForm';
import CityWeather from './components/CityWeather';

const API_KEY = '&appid=597183998af258a21fb04ea3b8b5b63f';
//const API_BASE_URL = (location) => `http://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric${API_KEY}`
const API_BASE_URL = (location) => `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&lang=es${API_KEY}`
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      city : false,
      country : '',
      temp : '',
      windSpeed : '',
      description : '',
      humidity : '',
      icon : ''
    };
  }

  getchWeatherNow = async event => {
    event.preventDefault();
    console.log(event.target.elements.city.value);
    let city = event.target.elements.city.value;
    const weatherRequest = await fetch( API_BASE_URL(city) );
    const response = await weatherRequest.json();
    console.log(response);
    this.setState({
      city : response.name,
      country : response.sys.country,
      temp : Math.round(response.main.temp),
      windSpeed : Math.round(response.wind.speed * 3.6),
      description : response.weather[0].description,
      humidity : response.main.humidity,
      icon : response.weather[0].icon,
    });
  };

  getchWeatherFive = async() => {
    const weatherRequest = await fetch( API_BASE_URL('Nueva Imperial') );
    const response = await weatherRequest.json();
    console.log(response);
    this.setState({
      city : response.name,
      country : response.sys.country,
      temp : response.main.temp,
      windSpeed : Math.round(response.wind.speed * 3.6)
    });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <SearchForm getLocation={this.getchWeatherNow}/>
          { this.state.city ? <CityWeather weatherInfo={this.state} /> : null }
        </div>
      </div>
    )
  }
}

export default App;
