import type { Joke, JokesArr } from "../types";

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

const modal = document.getElementById('history-modal') as HTMLDialogElement;

export const renderJokesHistory = (jokesArr: JokesArr) => {
    const modalBody = document.getElementById('modal-body');
    if(modalBody){
        modalBody.innerHTML = '';
        jokesArr.forEach(joke => {
            let scored_at: String = 'Date Error';
            joke.date?
                scored_at = new Date(joke.date).toLocaleString('ES-es') : '';

            const card = `
                <div class="joke-card">
                        <span>${joke.value}</span>
                        <hr>
                        <div class="joke-card__details">
                            <img class="score-icon" src="/icons/${joke.score}.svg" alt="Score Face">
                            <span>${scored_at}h</span>
                        </div>
                    </div>
            `;
            modalBody.innerHTML += card;
        })
    }
    modal? modal.showModal() : '';
}

export const closeJokesHistory = () => {
    modal? modal.close() : '';
}