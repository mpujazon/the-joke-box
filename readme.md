# Sprint 4 - The Joke Box

## Description

TypeScript + Vite web app that shows random jokes and the user’s current weather. It consumes two public joke APIs and the OpenWeather API, lets you score each joke, and keeps an in-memory history.

![Project Demo](/public/demo.webp "Project Demo")

## Project Structure

```
the-joke-box/
├── index.html
├── package.json
├── public/
│   └── icons/               # Score icons
└── src/
    ├── main.ts              # App and event handlers
    ├── style.css            # Styles and responsive layout
    ├── types.ts             # Joke and weather typings
    ├── jokes/
    │   ├── jokes.api.ts     # Fetch from icanhazdadjoke and Chuck Norris
    │   ├── jokes.logic.ts   # Random API selection and in-memory reporting
    │   └── jokes.ui.ts      # Render jokes and handle scoring UI
    └── weather/
        ├── weather.api.ts   # Fetch OpenWeather by coordinates
        ├── weather.logic.ts # Gets geolocation and loads weather data
        └── weather.ui.ts    # Render current weather icon, temperature, and city
```

## Technologies

- TypeScript
- Vite 6
- Fetch API (REST calls)
- Browser Geolocation API

## Requirements

- Node.js 18+ and npm
- OpenWeather key in .env var `VITE_WEATHER_API_KEY`

## Installation

```bash
git clone <repo-url>
cd the-joke-box
npm install
```

Create a `.env` file in the project root with your OpenWeather key:

```bash
echo "VITE_WEATHER_API_KEY=<your_api_key>" > .env
```

Or try this web on [Vercel Deploy](https://the-joke-box.vercel.app).

## Run

- Dev server: `npm run dev`
- Production build: `npm run build`
- Preview built app: `npm run preview`

## Features

- Shows a random joke from icanhazdadjoke or Chuck Norris [src/jokes/jokes.logic.ts](src/jokes/jokes.logic.ts)
- "Next joke!" button fetches a new joke and stores the previous one with score and timestamp [src/main.ts](src/main.ts)
- Clickable scoring system with deselect when clicking outside the icons [src/jokes/jokes.ui.ts](src/jokes/jokes.ui.ts)
- Retrieves user geolocation and fetches weather from OpenWeather [src/weather/weather.logic.ts](src/weather/weather.logic.ts)
- Renders icon, temperature in ºC, and city/country header [src/weather/weather.ui.ts](src/weather/weather.ui.ts)
- Gradient styling, decorative blobs, and responsive behavior [src/style.css](src/style.css)

## Learnings

- Use of `Promise.allSettled` to load data in parallel without blocking the UI
- Calling public APIs with HTTP error handling
- Typing network data and DOM usage in TypeScript
- Event handling and DOM manipulation without frameworks
- Geolocation with permission handling and timeouts

## Contributions

1. Fork the repository
2. Create a branch: `git checkout -b feature/my-improvement`
3. Apply changes and add tests when relevant
4. Write descriptive commits: `git commit -m "feat: describe the improvement"`
5. Push the branch: `git push origin feature/my-improvement`
6. Open a pull request
