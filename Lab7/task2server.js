const express = require('express');
const { MongoClient } = require('mongodb');
const path = require('path');

const app = express();
const PORT = 3000;
const MONGO_URL = 'mongodb://127.0.0.1:27017';
const DB_NAME = 'book_db';

let db, booksCollection;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'task2')));

MongoClient.connect(MONGO_URL)
    .then(client => {
        console.log('Connected to MongoDB');
        db = client.db(DB_NAME);
        booksCollection = db.collection('books');
    })
    .catch(err => console.error(err));

app.get('/books/search', async (req, res) => {
    try {
        const titleQuery = req.query.title || '';
        const books = await booksCollection.find({ 
            title: { $regex: titleQuery, $options: "i" } 
        }).toArray();
        res.json(books);
    } catch (error) {
        res.status(500).json({ error: 'Search failed' });
    }
});

app.get('/books/top', async (req, res) => {
    try {
        const books = await booksCollection.find({ rating: { $gte: 4 } }).limit(5).toArray();
        res.json(books);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch top books' });
    }
});

app.get('/books/category/:category', async (req, res) => {
    try {
        const category = req.params.category;
        const books = await booksCollection.find({ 
            category: { $regex: new RegExp(`^${category}$`, 'i') } 
        }).toArray();
        res.json(books);
    } catch (error) {
        res.status(500).json({ error: 'Failed to filter by category' });
    }
});

app.get('/books/sort/:field', async (req, res) => {
    try {
        const field = req.params.field;
        let sortQuery = {};
        
        if (field === 'price') {
            sortQuery = { price: 1 };
        } else if (field === 'rating') {
            sortQuery = { rating: -1 };
        }

        const books = await booksCollection.find().sort(sortQuery).toArray();
        res.json(books);
    } catch (error) {
        res.status(500).json({ error: 'Failed to sort books' });
    }
});

app.get('/books', async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = 5;
        const skip = (page - 1) * limit;

        const books = await booksCollection.find().skip(skip).limit(limit).toArray();
        res.json(books);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch books' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});