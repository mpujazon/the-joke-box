import type { Joke } from "../types";

export const renderJoke = (joke: Joke) => {
    const jokeValueEl = document.getElementById('joke-value');
    jokeValueEl? jokeValueEl.textContent = joke.value : '';
}

export const selectScore = (event: Event): number => {
    deselectScore();

    const scoreIcon = event.target as Element;
    scoreIcon.classList.add('selected');
    
    const scoreValue = parseInt(scoreIcon.getAttribute('value') || '-1');

    return scoreValue;
}

export const deselectScore = (): number => {
    const scoreButtons = document.getElementById('score-buttons');
    Array.from(scoreButtons?.children || []).forEach(icon => {
        (icon as Element).classList.remove('selected');
    });
    
    return -1;
}