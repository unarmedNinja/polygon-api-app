import express from 'express';
import polygonRoutes from './routes/polygon.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/polygon', polygonRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});