const { MongoClient } = require('mongodb');

const MONGO_URL = 'mongodb://127.0.0.1:27017';
const DB_NAME = 'book_db';

const sampleBooks = [
    { title: "JavaScript Essentials", author: "John Smith", category: "Programming", price: 450, rating: 4.5, year: 2023 },
    { title: "Advanced Node.js", author: "Jane Doe", category: "Programming", price: 600, rating: 4.8, year: 2024 },
    { title: "React for Beginners", author: "Alice Johnson", category: "Programming", price: 400, rating: 4.2, year: 2022 },
    { title: "The Cosmic Mystery", author: "Dr. Alan Grant", category: "Science Fiction", price: 350, rating: 3.9, year: 2021 },
    { title: "Dune", author: "Frank Herbert", category: "Science Fiction", price: 550, rating: 4.9, year: 1965 },
    { title: "History of the Ancient World", author: "Susan Bauer", category: "History", price: 800, rating: 4.7, year: 2007 },
    { title: "Python Data Science", author: "Mark Tech", category: "Programming", price: 750, rating: 4.6, year: 2023 },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", category: "Classic", price: 300, rating: 4.1, year: 1925 },
    { title: "Learning C++", author: "Bjarne Stroustrup", category: "Programming", price: 650, rating: 3.8, year: 2013 },
    { title: "Digital Minimalism", author: "Cal Newport", category: "Self-Help", price: 450, rating: 4.4, year: 2019 }
];

async function seedDatabase() {
    try {
        const client = await MongoClient.connect(MONGO_URL);
        console.log("Connected to MongoDB...");
        
        const db = client.db(DB_NAME);
        const booksCollection = db.collection('books');

        await booksCollection.deleteMany({});
        
        const result = await booksCollection.insertMany(sampleBooks);
        console.log(`Successfully inserted ${result.insertedCount} books!`);

        await client.close();
        console.log("Database connection closed.");
    } catch (error) {
        console.error("Error seeding database:", error);
    }
}

seedDatabase();