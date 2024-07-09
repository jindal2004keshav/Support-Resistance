<img src="https://github.com/jindal2004keshav/Support-Resistance/blob/main/Screenshot%202024-07-09%20172517.png" alt="Screenshot 1" />

# Stock Support and Resistance Levels Visualizer

This Flask-based web application visualizes support and resistance levels in stock prices. Users can select stocks listed on the National Stock Exchange (NSE) and specify date ranges and intervals to generate plots that highlight these key levels. The app integrates the Yahoo Finance API to retrieve historical stock data and utilizes machine learning techniques to identify support and resistance levels.

## Features

- **Stock Selection**: Choose any stock listed on the NSE.
- **Custom Date Range**: Specify start and end dates for the analysis.
- **Interval Options**: Select from various time intervals (e.g., 1m, 5m, 1d).
- **Support and Resistance Levels**: Automatically detects and plots support and resistance levels.
- **Interactive Plots**: Generates and displays candlestick charts with marked levels.
- **User-Friendly Interface**: Simple form-based input and output visualization.

## Technologies Used

- **Frontend**: HTML, CSS, Bootstrap
- **Backend**: Flask
- **Data Processing**: Pandas, NumPy
- **Visualization**: Matplotlib, Seaborn, mplfinance
- **Data Source**: Yahoo Finance API
