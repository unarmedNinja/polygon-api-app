import express from 'express';
import PolygonController from '../controllers/polygonController.js';

const router = express.Router();
const polygonController = new PolygonController();

// Define routes for Polygon.io API
router.get('/stocks/:ticker', polygonController.fetchStockData);
router.get('/market', polygonController.fetchMarketData);

// Add route for merged indicators
router.get('/indicators/:ticker', polygonController.fetchMergedIndicators);

export default router;