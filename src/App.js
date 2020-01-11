import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SearchForm from './components/SearchForm';
import CityWeather from './components/CityWeather';
import CityNotfound from './components/CityNotFound';

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
      feelsLike : '',
      humidity : '',
      windSpeed : '',
      description : '',
      icon : '',
      error : false
    };
  }

  getchWeatherNow = async event => {
    event.preventDefault();
    console.log(event.target.elements.city.value);
    let city = event.target.elements.city.value;
    const weatherRequest = await fetch( API_BASE_URL(city) );
    const response = await weatherRequest.json();
    console.log(response);
    if(response.cod === 200)
      this.setState({
        city : response.name,
        country : response.sys.country,
        temp : Math.round(response.main.temp),
        feelsLike : Math.round(response.main.feels_like),
        humidity : response.main.humidity,
        windSpeed : Math.round(response.wind.speed * 3.6),
        description : response.weather[0].description,
        icon : response.weather[0].icon,
        error : false
      });
    else
      this.setState({
        city : false,
        error : true

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
      <div className="App bg-black text-white">
        <div className="TopBar bg-night py-2">
          <div className="container">
            <SearchForm getLocation={this.getchWeatherNow}/>
          </div>
        </div>
        <div className="content py-2">
          <div className="container">
            { this.state.city ? <CityWeather weatherInfo={this.state} /> : null }
            { this.state.error ? <CityNotfound /> : null }
          </div>
        </div>
      </div>
    )
  }
}

export default App;
