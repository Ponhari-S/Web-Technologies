const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const path = require('path');

const app = express();
const PORT = 3000;
const MONGO_URL = 'mongodb://127.0.0.1:27017';
const DB_NAME = 'student_db';

let db, notesCollection;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

MongoClient.connect(MONGO_URL)
    .then(client => {
        console.log('Connected to MongoDB');
        db = client.db(DB_NAME);
        notesCollection = db.collection('notes');
    })
    .catch(err => console.error(err));

app.post('/notes', async (req, res) => {
    try {
        const { title, subject, description } = req.body;
        
        const newNote = {
            title,
            subject,
            description,
            created_date: new Date().toISOString().split('T')[0]
        };

        const result = await notesCollection.insertOne(newNote);
        res.status(201).json({ message: 'Note added successfully', id: result.insertedId });
    } catch (error) {
        res.status(500).json({ error: 'Failed to add note' });
    }
});

app.get('/notes', async (req, res) => {
    try {
        const notes = await notesCollection.find({}).toArray();
        res.status(200).json(notes);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch notes' });
    }
});

app.put('/notes/:id', async (req, res) => {
    try {
        const noteId = req.params.id;
        const { title, description } = req.body;

        const result = await notesCollection.updateOne(
            { _id: new ObjectId(noteId) },
            { $set: { title: title, description: description } }
        );

        if (result.matchedCount === 0) return res.status(404).json({ error: 'Note not found' });
        res.status(200).json({ message: 'Note updated successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to update note' });
    }
});

app.delete('/notes/:id', async (req, res) => {
    try {
        const noteId = req.params.id;

        const result = await notesCollection.deleteOne({ _id: new ObjectId(noteId) });

        if (result.deletedCount === 0) return res.status(404).json({ error: 'Note not found' });
        res.status(200).json({ message: 'Note deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete note' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});