import type { Joke, JokesArr } from "../types";
import { fetchChuckJoke, fetchDadJoke } from "./jokes.api";

let useDadJoke = true;

export const loadJoke = async (): Promise<Joke> => {
    const fetchFunction = useDadJoke? fetchDadJoke : fetchChuckJoke;
    useDadJoke = !useDadJoke;
    const joke = await fetchFunction();
    return joke;
}

export const reportJoke = (jokesArr: JokesArr, joke: Joke): JokesArr => {
    const newJokesArr = [...jokesArr, joke];
    return newJokesArr;
}
