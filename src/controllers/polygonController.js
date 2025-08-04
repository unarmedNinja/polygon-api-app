import PolygonService from '../services/polygonService.js';

class PolygonController {
    constructor() {
        this.polygonService = new PolygonService(process.env.POLYGON_API_KEY);

        this.fetchStockData = this.fetchStockData.bind(this);
        this.fetchMarketData = this.fetchMarketData.bind(this);
        this.fetchMergedIndicators = this.fetchMergedIndicators.bind(this);
    }

    async fetchStockData(req, res) {
        try {
            const data = await this.polygonService.getStockData(req.params.ticker);
            res.json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async fetchMarketData(req, res) {
        try {
            const data = await this.polygonService.getMarketData();
            res.json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    // Controller for merged indicators route
    async fetchMergedIndicators(req, res) {
        try {
            // Optionally, parse query params for indicator options
            const options = req.query || {};
            const data = await this.polygonService.getMergedIndicators(req.params.ticker, options);
            res.json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

export default PolygonController;