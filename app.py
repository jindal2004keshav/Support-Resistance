import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
from flask import Flask, render_template, request, flash, redirect, url_for
import yfinance as yf
import pandas as pd
import numpy as np
import seaborn as sns
from mpl_finance import candlestick_ohlc
import matplotlib.dates as mpl_dates

app = Flask(__name__)
app.secret_key = "MerMarzi"

def calculate_support_resistance(stock_name, stock_start_date, stock_end_date, interval):
    try:
        start_date = pd.to_datetime(stock_start_date, format='%Y-%m-%d')
        end_date = pd.to_datetime(stock_end_date, format='%Y-%m-%d')
        delta_days = (end_date - start_date).days
        
        if interval in ['1m', '2m', '5m', '15m', '30m', '60m'] and delta_days > 60:
            return None, None
        
        stock = yf.Ticker(stock_name)
        df = stock.history(interval=interval,start=start_date,end=end_date)
        
        if df.empty:
            return None, None

        df['Date'] = pd.to_datetime(df.index)
        df['Date'] = df['Date'].apply(mpl_dates.date2num)

        df = df.loc[:,['Date', 'Open', 'High', 'Low', 'Close']]
        s =  np.mean(df['High'] - df['Low'])
        
        def isSupport(df,i):
            support = df['Low'].iloc[i] < df['Low'].iloc[i-1]  and df['Low'].iloc[i] < df['Low'].iloc[i+1] and df['Low'].iloc[i+1] < df['Low'].iloc[i+2] and df['Low'].iloc[i-1] < df['Low'].iloc[i-2]
            return support

        def isResistance(df,i):
            resistance = df['High'].iloc[i] > df['High'].iloc[i-1]  and df['High'].iloc[i] > df['High'].iloc[i+1] and df['High'].iloc[i+1] > df['High'].iloc[i+2] and df['High'].iloc[i-1] > df['High'].iloc[i-2] 
            return resistance

        def isFarFromLevel( l):
            return np.sum([abs(l-x) < s  for x in levels]) == 0

        levels = []
        for i in range(2, df.shape[0] - 2):
            if isSupport(df, i):
                l = df['Low'].iloc[i]
                if isFarFromLevel(l):
                    levels.append((i, l))
            
            elif isResistance(df, i):
                l = df['High'].iloc[i]
                if isFarFromLevel(l):
                    levels.append((i, l))
        
        return df, levels
    except Exception as e:
        print(f"Error in calculate_support_resistance: {e}")
        return None, 

def plot_all(df, levels):
    sns.set(style='whitegrid', palette='pastel')
    fig, ax = plt.subplots()

    candlestick_ohlc(ax,df.values,width=0.6, colorup='green', colordown='red', alpha=0.8)

    date_format = mpl_dates.DateFormatter('%d %b %Y')
    ax.xaxis.set_major_formatter(date_format)
    fig.autofmt_xdate()

    min_price = df['Low'].min(skipna=True)
    max_price = df['High'].max(skipna=True)
    price_range = max_price - min_price
    num_ticks = 15  # Choose the desired number of y-ticks
    y_tick_spacing = round(price_range / num_ticks, -1) if price_range != 0 else 1
    ax.set_yticks(np.arange(round(min_price / 10) * 10, round(max_price / 10) * 10 + y_tick_spacing, y_tick_spacing))

    ax.set_xlabel('Date')
    ax.set_ylabel('Price')

    fig.tight_layout()

    for level in levels:
        plt.hlines(level[1],xmin=df['Date'].iloc[level[0]], xmax=max(df['Date']),colors='black', alpha=0.6)
        
    plt.savefig('static/my_plot.png')
    plt.close(fig)  

@app.route('/')
def hello():
    return render_template('index.html')

@app.route('/get_plot', methods=['GET','POST'])
def get_plot():
    if request.method == "POST":
        stock = request.form['stock_name']
        stock_start_date = request.form['stock_start_date']
        stock_end_date = request.form['stock_end_date']
        interval = request.form['interval']

        df, levels = calculate_support_resistance(stock, stock_start_date, stock_end_date, interval)
        
        if df is None or levels is None:
            flash("No data available for the given parameters. Please ensure your date range and interval are correct. Intraday data is only available for the last 60 days.")
            return redirect(url_for('hello'))
        
        plot_all(df, levels)
        
        return render_template('index.html', plot_url="static/my_plot.png")
    else:
        return render_template('index.html')

if __name__ == "__main__":
    app.run(debug=True)
