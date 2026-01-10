import { loadJoke } from "./jokes/jokes.logic"
import { loadWeather } from "./weather/weather.logic"

const init = async() => {
    try {
        const [joke, weather] = await Promise.allSettled([
            loadJoke(), 
            loadWeather()
        ]).then(results => results.map( result=>
            result.status === 'fulfilled'? result.value : null
        ));

        //renderJoke(joke);
        //renderWeather(weather);
    } catch (error) {
        console.error("Error:", error);
    }
}

document.addEventListener("DOMContentLoaded", init);