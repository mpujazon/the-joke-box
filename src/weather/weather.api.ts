import type { WeatherData, LocationCoords } from "../types";

const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export const fetchWeather = async({lat, lon}: LocationCoords): Promise<WeatherData> => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`;
    const response = await fetch(url);

    if(!response.ok){
        throw new Error(`Response status: ${response.status}`)
    }

    const data = await response.json();
    return data;
}