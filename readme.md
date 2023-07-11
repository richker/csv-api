# CSV-API

CSV-API is a simple Express.js server that provides a REST API for fetching data from a CSV file. The API supports date filtering, allowing clients to retrieve data for a specific date range.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have met the following requirements:

* You have installed the latest version of Node.js and npm.
* You have a `<Windows/Linux/Mac>` machine.

### Installing CSV-API

To install CSV-API, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory: `cd csv-api`
3. Install the dependencies: `npm install`

### Using CSV-API

To use CSV-API, follow these steps:

1. Start the application: `npm run dev`
2. The server will start on localhost:3000 by default.

## API

The server provides a GET endpoint at `/recall` which retrieves data from a CSV file.

### Parameters

- `from_ts` (optional): The start date for the data.
- `to_ts` (optional): The end date for the data.

### Examples

- `/recall`
- `/recall?from_ts=2020-01-01`
- `/recall?from_ts=2020-01-01&to_ts=2022-01-01`

### Response

The API responds with an array of objects, each containing a `date` and `recall` property.

```json
[
  {
    "date": "<date>",
    "recall": "<recall>"
  },
  ...
]
```

## Built With

- [Express.js](https://expressjs.com/) - The web framework used
- [Node.js](https://nodejs.org/) - The runtime environment
- [Nodemon](https://nodemon.io/) - Utility for auto-restarting Node.js applications
- [Cors](https://www.npmjs.com/package/cors) - Middleware for enabling CORS

## Authors

- Matan Richker - Matanrichker@gmail.com - [Github Account](https://github.com/richker)