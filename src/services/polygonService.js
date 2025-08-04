import axios from 'axios';

class PolygonService {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = 'https://api.polygon.io/v2';
    }

    async getStockData(symbol) {
        try {
            const response = await axios.get(`${this.baseUrl}/aggs/ticker/${symbol}/prev`, {
                params: {
                    apiKey: this.apiKey
                }
            });
            return response.data;
        } catch (error) {
            throw new Error(`Error fetching stock data: ${error.message}`);
        }
    }

    async getMarketData() {
        try {
            const response = await axios.get(`${this.baseUrl}/marketstatus`, {
                params: {
                    apiKey: this.apiKey
                }
            });
            return response.data;
        } catch (error) {
            throw new Error(`Error fetching market data: ${error.message}`);
        }
    }

    async getIndicator(symbol, indicator, options = {}) {
        console.log(`Fetching ${indicator} for ${symbol} with options:`, options, this.apiKey);
        try {
            const response = await axios.get(
                `https://api.polygon.io/v1/indicators/${indicator}/${symbol}`,
                {
                    params: {
                        apiKey: this.apiKey,
                        ...options
                    }
                }
            );
            return response.data;
        } catch (error) {
            throw new Error(`Error fetching indicator data: ${error.message}`);
        }
    }

    async getMergedIndicators(symbol, options = {}) {
        try {
            const [rsi, ema, sma] = await Promise.all([
                this.getIndicator(symbol, 'rsi', options.rsi || {}),
                this.getIndicator(symbol, 'ema', options.ema || {}),
                this.getIndicator(symbol, 'sma', options.sma || {})
            ]);
            console.log(`Merged indicators for ${symbol}:`, { rsi, ema, sma });
            const merged = [];
            if (rsi.results && ema.results && sma.results) {
                const rsiMap = new Map(rsi.results.values.map(item => [item.timestamp, item.value]));
                const emaMap = new Map(ema.results.values.map(item => [item.timestamp, item.value]));
                const smaMap = new Map(sma.results.values.map(item => [item.timestamp, item.value]));

                for (let [timestamp, rsiValue] of rsiMap.entries()) {
                    merged.push({
                        timestamp,
                        rsi: rsiValue,
                        ema: emaMap.get(timestamp),
                        sma: smaMap.get(timestamp)
                    });
                }
            }

            return {
                symbol,
                merged
            };
        } catch (error) {
            throw new Error(`Error merging indicators: ${error.message}`);
        }
    }
}

export default PolygonService;