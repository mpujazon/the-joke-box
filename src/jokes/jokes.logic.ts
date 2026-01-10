import type { Joke, JokesArr } from "../types";
import { fetchChuckJoke, fetchDadJoke } from "./jokes.api";

export const loadJoke = async (): Promise<Joke> => {
    const fetchFunctions = [fetchDadJoke, fetchChuckJoke];
    const randomIndex = Math.round(Math.random());

    const joke = await fetchFunctions[randomIndex]();
    return joke;
}

export const reportJoke = (jokesArr: JokesArr, joke: Joke): JokesArr => {
    const newJokesArr = [...jokesArr, joke];
    return newJokesArr;
}