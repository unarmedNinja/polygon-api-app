# Polygon API Application

## Overview
This is a Node.js application that consumes the Polygon.io API to fetch financial data. It is built using Express and provides a set of endpoints to interact with the Polygon.io services.

## Project Structure
```
polygon-api-app
├── src
│   ├── app.js                # Entry point of the application
│   ├── routes
│   │   └── polygon.js        # Routes for Polygon.io API
│   ├── controllers
│   │   └── polygonController.js # Controller for handling requests
│   ├── services
│   │   └── polygonService.js  # Service for making API calls
│   └── utils
│       └── index.js          # Utility functions
├── package.json               # NPM configuration file
└── README.md                  # Project documentation
```

## Setup Instructions
1. Clone the repository:
   ```
   git clone <repository-url>
   cd polygon-api-app
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory and add your Polygon.io API key:
   ```
   POLYGON_API_KEY=your_api_key_here
   ```

4. Start the application:
   ```
   npm start
   ```

## API Usage
### Endpoints
- `GET /api/polygon/stock/:symbol`
  - Fetches stock data for the given symbol.
  
- `GET /api/polygon/market`
  - Fetches market data.

### Example Requests
- To fetch stock data:
  ```
  GET /api/polygon/stock/AAPL
  ```

- To fetch market data:
  ```
  GET /api/polygon/market
  ```

## Contributing
Feel free to submit issues or pull requests for improvements or bug fixes.

## License
This project is licensed under the MIT License.