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
                <div className="col text-center mb-3">
                    <h1 className="pt-4"> {weatherInfo.temp}&deg;</h1>
                    <span>{weatherInfo.description}</span>
                </div>
                <div className="col mb-3">
                    <img src={i(weatherInfo.icon)} alt={weatherInfo.description}/>
                </div>
                <div className="col-sm-5 text-center">
                    <p> Viento {weatherInfo.windSpeed}Km/h</p>
                    <p> Humedad {weatherInfo.humidity}&#37;</p>
                    <p> Sensaci&oacute;n T&eacute;rmica {weatherInfo.feelsLike}&deg;</p>
                </div>
            </div>
        </div>
    );
}

export default CityWeather;
