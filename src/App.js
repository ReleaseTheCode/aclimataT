import React from 'react';
import './App.css';
import SearchForm from './components/SearchForm';

const API_KEY = '&appid=597183998af258a21fb04ea3b8b5b63f';
//const API_BASE_URL = (location) => `http://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric${API_KEY}`
const API_BASE_URL = (location) => `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric${API_KEY}`
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      city : '',
      country : '',
      temp : '',
      windSpeed : ''
    };
    this.getchWeatherNow();
  }

  getchWeatherNow = async() => {
    const weatherRequest = await fetch( API_BASE_URL('Temuco,cl') );
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
          <SearchForm />
          <p> Ciudad <span className="badge badge-info">{this.state.city} </span><span className="badge badge-info">{this.state.country}</span> </p>
          <p> temperature <span className="badge badge-info">{this.state.temp}</span> </p>
          <p> Viento <span className="badge badge-info">{this.state.windSpeed}</span>  Km/H</p>
        </div>
      </div>
    )
  }

}

export default App;
