import type { Joke } from "../types";

export const renderJoke = (joke: Joke) => {
    const jokeValueEl = document.getElementById('joke-value');
    jokeValueEl? jokeValueEl.textContent = joke.value : '';
}