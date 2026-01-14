import { apiRequest } from "../lib/httpClient";
import type { LocationCoords, WeatherData } from "../types";

const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const WEATHER_API_BASE_URL = import.meta.env.VITE_API_WEATHER_BASE_URL;

export const weatherService = {
    async loadWeather(): Promise<WeatherData> {
        const coords: LocationCoords = await this.getLocation();
        const weatherData: WeatherData = await apiRequest<WeatherData>(
            WEATHER_API_BASE_URL,
            {
                query: {
                    'lat': coords.lat,
                    'lon': coords.lon,
                    'appid': WEATHER_API_KEY
                }
            }
        );
        return weatherData;
    },

    async getLocation(): Promise<LocationCoords> {
        return new Promise((resolve,reject)=>{
        if(!navigator.geolocation){   
            reject(new Error("Geolocation not supported"));
            return;
        }

        const success = (position: GeolocationPosition ) => {
            const coords: LocationCoords = {
                lat: position.coords.latitude,
                lon: position.coords.longitude
            }
            resolve(coords);
        }

        const error = (err: GeolocationPositionError) => {
            alert("Unable to retrieve your location.");
            reject(err);
        };

        const options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };
        navigator.geolocation.getCurrentPosition(success, error, options);
    });
    }
}
