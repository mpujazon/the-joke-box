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
    value: string;
    score?: number;
    date?: string;
}

export type JokesArr = Joke[];