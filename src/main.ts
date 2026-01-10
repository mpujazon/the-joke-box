import { loadJoke } from "./jokes/jokes.logic"
import { deselectScore, renderJoke, selectScore } from "./jokes/jokes.ui";
import type { Joke, WeatherData } from "./types";
import { loadWeather } from "./weather/weather.logic"
import { renderWeather } from "./weather/weather.ui";

let score: Number;

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

const loadNextJoke = async() => {
    //if(score)reportJoke();
    const joke = await loadJoke();
    renderJoke(joke);
}

const scoreButtons = document.getElementById('score-buttons');

scoreButtons?.addEventListener('click', (event: Event) => {
    score = selectScore(event);
});

document.addEventListener('click', (event: Event) => {
    const target = event.target as HTMLElement;
    
    if (!scoreButtons?.contains(target)) {
        score = deselectScore();
    }
});

const nextJokeBtn = document.getElementById('next-joke-btn');
nextJokeBtn?.addEventListener('click', loadNextJoke);

document.addEventListener("DOMContentLoaded", init);