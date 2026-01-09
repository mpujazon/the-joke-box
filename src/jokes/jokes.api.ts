import type { Joke } from "../types";

export const fetchDadJoke = async (): Promise<Joke> => {
    const url = 'https://icanhazdadjoke.com/';
    const response = await fetch(url, {headers:{"Accept": "application/json"}});
    
    if (!response.ok){
        throw new Error(`Response status: ${response.status}`);
    }

    const data = await response.json();

    const joke = {
        id: data.id,
        value: data.joke
    }
    return joke;
}

export const fetchChuckJoke = async (): Promise<Joke> => {
    const url = 'https://api.chucknorris.io/jokes/random';
    const response = await fetch(url);

    if (!response.ok){
        throw new Error(`Response status: ${response.status}`);
    }

    const data = await response.json();

    const joke = {
        id: data.id,
        value: data.value
    }
    return joke;
}