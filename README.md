# translink-proxy
A quick and dirty Express proxy to get around CORS issues with the [Translink Trains](https://github.com/hundredpercentcoverage/translink-trains) React App.

Retrieves info from the Translink real-time passenger information endpoints listed on OpenData NI and converts them to a usable JSON format that the front-end can work with.

The npm scripts are set for Windows machines and will need modified is being used on other systems.

## To run locally
- Clone repo
- Run `npm install`
- Run `npm run offline`

## Endpoints
- `/stations` to get station names and codes (JSON)
- `/station/{code}` to get station information for station with given code.

Note that the proxy converts the station information from XML to JSON, which results in a large and messy object.
