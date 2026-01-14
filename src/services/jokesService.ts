import { apiRequest } from "../lib/httpClient";
import type { ChuckJoke, DadJoke, Joke, JokesArr } from "../types";

const VITE_API_JOKES1_BASE_URL = import.meta.env.VITE_API_JOKES1_BASE_URL;
const VITE_API_JOKES2_BASE_URL = import.meta.env.VITE_API_JOKES2_BASE_URL;

let useDadJoke = true;

export const jokesService = {
    async loadJoke():Promise<Joke> {
        let joke: Joke;

        if(useDadJoke){
            const data = await apiRequest<DadJoke>(VITE_API_JOKES1_BASE_URL);
            joke = { value: data.joke }
        }else{
            const data = await apiRequest<ChuckJoke>(VITE_API_JOKES2_BASE_URL);
            joke = { value: data.value }
        }
        useDadJoke = !useDadJoke;

        return joke;
    },

    reportJoke(jokesArr: JokesArr, joke: Joke): JokesArr{
        return [...jokesArr, joke];
    }
}