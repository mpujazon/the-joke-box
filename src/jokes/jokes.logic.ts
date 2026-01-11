import type { Joke, JokesArr } from "../types";
import { fetchChuckJoke, fetchDadJoke } from "./jokes.api";

export const loadJoke = async (apiToCall:boolean): Promise<Joke> => {
    const fetchFunctions = [fetchDadJoke, fetchChuckJoke];
    let joke: Joke;
    apiToCall?
        joke = await fetchFunctions[0]()
        : joke = await fetchFunctions[1]();
    return joke;
}

export const reportJoke = (jokesArr: JokesArr, joke: Joke): JokesArr => {
    const newJokesArr = [...jokesArr, joke];
    return newJokesArr;
}
