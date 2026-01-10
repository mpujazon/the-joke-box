import { loadJoke } from "./jokes/jokes.logic"
import { renderJoke } from "./jokes/jokes.ui";
import type { Joke, WeatherData } from "./types";
import { loadWeather } from "./weather/weather.logic"
import { renderWeather } from "./weather/weather.ui";

const init = async() => {
    try {
        const [jokeResult, weatherResult] = await Promise.allSettled([loadJoke(), loadWeather()]);

        const joke: Joke | null = jokeResult.status === 'fulfilled' ? jokeResult.value : null;
        const weather: WeatherData | null = weatherResult.status === 'fulfilled' ? weatherResult.value : null;

        weather? renderWeather(weather) : '';
        joke? renderJoke(joke) : '';
    } catch (error) {
        console.error("Error:", error);
    }
}

document.addEventListener("DOMContentLoaded", init);