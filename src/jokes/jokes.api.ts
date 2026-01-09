import type { DadJokeData } from "../types";

export const fetchDadJoke = async (): Promise<DadJokeData> => {
    const url = 'https://icanhazdadjoke.com/';
    const response = await fetch(url, {headers:{"Accept": "application/json"}});
    
    if (!response.ok){
        throw new Error(`Response status: ${response.status}`);
    }

    const data = response.json();
    return data;
}
