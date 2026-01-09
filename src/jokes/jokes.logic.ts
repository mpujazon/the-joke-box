import type { Joke } from "../types";
import { fetchChuckJoke, fetchDadJoke } from "./jokes.api";

export const loadJoke = async (): Promise<Joke> => {
    const fetchFunctions = [fetchDadJoke, fetchChuckJoke];
    const randomIndex = Math.round(Math.random());

    const joke = await fetchFunctions[randomIndex]();
    return joke;
}