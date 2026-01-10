import { loadJoke, reportJoke } from "./jokes/jokes.logic"
import { deselectScore, renderJoke, selectScore } from "./jokes/jokes.ui";
import type { Joke, JokesArr, WeatherData } from "./types";
import { loadWeather } from "./weather/weather.logic"
import { renderWeather } from "./weather/weather.ui";

let score: number = -1;
let joke: Joke | null;
let jokesArr: JokesArr = [];

const init = async() => {
    try {
        const [jokeResult, weatherResult] = await Promise.allSettled([loadJoke(), loadWeather()]);

        joke = jokeResult.status === 'fulfilled' ? jokeResult.value : null;
        const weather: WeatherData | null = weatherResult.status === 'fulfilled' ? weatherResult.value : null;

        weather? renderWeather(weather) : '';
        joke? renderJoke(joke) : '';
    } catch (error) {
        console.error("Error:", error);
    }
}

const loadNextJoke = async() => {
    if (score !== -1 && joke !== null){
        const jokeToReport: Joke = {
            id: joke.id,
            value: joke.value,
            score: score,
            date: new Date().toISOString()
        }
        jokesArr = reportJoke(jokesArr, jokeToReport);
        console.log(jokesArr);
        
    }
    joke = await loadJoke();
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