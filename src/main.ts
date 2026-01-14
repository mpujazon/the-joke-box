import { closeJokesHistory, deselectScore, renderJoke, renderJokesHistory, selectScore } from "./ui/jokes.ui";
import type { Joke, JokesArr, WeatherData } from "./types";
import { renderWeather } from "./ui/weather.ui";
import { jokesService } from "./services/jokesService";
import { weatherService } from "./services/weatherService";

let score: number = -1;
let joke: Joke | null;
let jokesArr: JokesArr = [];

const init = async() => {
    try {
        const [jokeResult, weatherResult] = await Promise.allSettled([jokesService.loadJoke(), weatherService.loadWeather()]);

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
            value: joke.value,
            score: score,
            date: new Date().toISOString()
        }
        jokesArr = jokesService.reportJoke(jokesArr, jokeToReport);
    }
    joke = await jokesService.loadJoke();
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

const nextJokeBtn = document.getElementById('next-joke-btn') as HTMLButtonElement;
nextJokeBtn?.addEventListener('click', loadNextJoke);

document.addEventListener("DOMContentLoaded", init);

const openHistoryButton = document.getElementById('open-history-btn') as HTMLButtonElement;
openHistoryButton?.addEventListener('click', ()=> {
    if(jokesArr.length !== 0) renderJokesHistory(jokesArr);
})

const closeHistoryButton = document.getElementById('close-history-btn') as HTMLButtonElement;
closeHistoryButton?.addEventListener('click', closeJokesHistory);
