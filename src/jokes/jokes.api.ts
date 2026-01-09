import type { ChuckJokeData, DadJokeData } from "../types";

export const fetchDadJoke = async (): Promise<DadJokeData> => {
    const url = 'https://icanhazdadjoke.com/';
    const response = await fetch(url, {headers:{"Accept": "application/json"}});
    
    if (!response.ok){
        throw new Error(`Response status: ${response.status}`);
    }

    const data = await response.json();
    return data;
}

export const fetchChuckJoke = async (): Promise<ChuckJokeData> => {
    const url = 'https://api.chucknorris.io/jokes/random';
    const response = await fetch(url);

    if (!response.ok){
        throw new Error(`Response status: ${response.status}`);
    }

    const data = await response.json();
    return data;
}