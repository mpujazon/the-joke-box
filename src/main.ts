import { loadJoke, reportJoke } from "./jokes/jokes.logic";
import type { JokesArr } from "./types";

const joke = {
    "id": "yu8u7ggkqwwe9dj4rqj3qw",
    "value": "Chuck Norris can taste lies.",
    "score":2,
    "date": new Date().toISOString()
}
const joke2 = {
    "id": "yu8u7ggkqwwe9dj4rqj3qws",
    "value": "Chuck Norris can taste liesaaaaaa.",
    "score":2,
    "date": new Date().toISOString()
}

let jokes: JokesArr = [];

jokes = reportJoke(jokes, joke);

console.log(jokes);

jokes = reportJoke(jokes, joke);
console.log(jokes);


