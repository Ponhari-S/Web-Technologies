const express = require('express');
const productRoutes = require('./routes/productRoutes');

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the Product API! Use /api/products to interact.');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});