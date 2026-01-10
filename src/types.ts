export interface WeatherData{
    weather:{
        main: string;
        description: string;
        icon: string;
    }[];
    main:{
        temp: number;
    };
    sys:{
        country: string;
    }
    name: string;
}

export interface LocationCoords{
    lat: number;
    lon: number;
}

export interface Joke{
    id: string;
    value: string;
    score?: number;
    date?: string;
}

export type JokesArr = Joke[];