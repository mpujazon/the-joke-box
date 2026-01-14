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

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
export type QueryParams = Record<string, string | number | boolean | undefined>;

export interface RequestOptions<TBody> {
    method?: HttpMethod;
    body?: TBody;
    headers?: Record<string, string>;
    query?: QueryParams;
}

export interface Joke{
    value: string;
    score?: number;
    date?: string;
}

export interface DadJoke{
    joke: string;
}

export interface ChuckJoke{
    value: string;
}

export type JokesArr = Joke[];