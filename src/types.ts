export interface DadJokeData{
    id: string;
    joke: string;
}

export interface ChuckJokeData{
    id: string;
    value: string;
}

export interface WeatherData{
    weather:{
        main: string;
        description: string;
        icon: string;
    }[];
    main:{
        temp: number;
    };
    name: string;
}

export interface Joke{
    id: string;
    joke: string;
    score?: number;
    date?: string;
}