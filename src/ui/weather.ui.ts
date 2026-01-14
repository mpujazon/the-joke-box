import type { WeatherData } from "../types";

export const renderWeather = (weatherDetails: WeatherData) => {
    const weatherIconEl = document.getElementById('weather__icon');
    weatherIconEl?.setAttribute('src', `http://openweathermap.org/img/wn/${weatherDetails.weather[0].icon}@2x.png`)

    const weatherTemperatureEl = document.getElementById('weather__temperature');
    weatherTemperatureEl? weatherTemperatureEl.textContent = `${(weatherDetails.main.temp-273.15).toFixed(0)}ºC` : '';
    
    const weatherCityEl = document.getElementById('weather__city');
    weatherCityEl? weatherCityEl.textContent = `${weatherDetails.name}, ${weatherDetails.sys.country}` : '';
} 