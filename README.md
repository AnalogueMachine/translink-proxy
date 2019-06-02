# translink-proxy
A quick and dirty Express proxy to get around CORS issues with the [Translink Trains](https://github.com/AnalogueMachine/translink-trains) React App.

Retrieves info from the Translink real-time passenger information endpoints listed on OpenData NI and converts them to a usable JSON format that the front-end can work with.

The npm scripts are set for Windows machines and will need modified is being used on other systems.

## To run
- Clone repo
- Run `npm install`
- Run `npm run offline`