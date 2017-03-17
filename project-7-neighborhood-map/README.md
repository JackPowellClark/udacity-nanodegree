# Neighborhood Map
A single-page application featuring a map of coffee shops in Brighton.

## Submission
See directory `dist` for submission. Simply open `index.html` in any modern web browser.

### A Note
The DarkSkyAPI will throw an error in all modern browsers:

> XMLHttpRequest cannot load... not allowed by Access-Control-Allow-Origin.

This is a feature in modern browsers to prevent API calls in the Front-End. As this course does not cover back-end development, the error is handled gracefully. The submission has been tested using example response data (see `exampleDarkSkyResponse.json`) and comments in `DarkSkyAPI.js`.

## Development
If you wish to develop this project further, change into the root directory—`project-7-neighborhood-map`—and run:

> `yarn install`

Once all node modules are installed, run:

> `yarn run dev`

This will boot up the Webpack DevServer (incl. hot reloading).

## Build

If you'd like to build for production, simply run:

> `yarn run build`

This will bundle `src` into a new directory `dist` (overwriting any existing files).