import React from 'react';


const CityWeather = props => {
    const { weatherInfo } = props;

    console.log('hola')
    console.log(weatherInfo)
    const i = (iconhex) => `http://openweathermap.org/img/wn/${iconhex}@2x.png`
    return (
        <div className="Box">
            <h3> {weatherInfo.city}, {weatherInfo.country}</h3>
            <div className="row">
                <div className="col-6 text-center">
                    <h1 className="pt-4"> {weatherInfo.temp}&deg;</h1>
                    <span>{weatherInfo.description}</span>
                </div>
                <div className="col-6">
                    <img src={i(weatherInfo.icon)} alt={weatherInfo.description}/>
                </div>
            </div>
            <br/>
            <p> Viento {weatherInfo.windSpeed}  Km/H</p>
            <p> Humedad {weatherInfo.humidity}&#37;</p>
        </div>
    );
}

export default CityWeather;
