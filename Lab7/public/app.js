const API_URL = '/notes';

document.addEventListener('DOMContentLoaded', fetchNotes);

async function saveNote() {
    const id = document.getElementById('note-id').value;
    const title = document.getElementById('title').value;
    const subject = document.getElementById('subject').value;
    const description = document.getElementById('description').value;

    const noteData = { title, subject, description };

    let method = 'POST';
    let url = API_URL;

    if (id) {
        method = 'PUT';
        url = `${API_URL}/${id}`;
        delete noteData.subject;
    }

    try {
        const response = await fetch(url, {
            method: method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(noteData)
        });

        if (response.ok) {
            resetForm();
            fetchNotes(); 
        } else {
            alert('Error saving note');
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

async function fetchNotes() {
    try {
        const response = await fetch(API_URL);
        const notes = await response.json();
        
        const container = document.getElementById('notes-container');
        container.innerHTML = '';

        notes.forEach(note => {
            const noteCard = document.createElement('div');
            noteCard.className = 'note-card';
            noteCard.innerHTML = `
                <h4>${note.title} <small>(${note.subject})</small></h4>
                <p>${note.description}</p>
                <small>Created: ${note.created_date || 'N/A'}</small><br><br>
                <button onclick="editNote('${note._id}', '${note.title}', '${note.subject}', '${note.description}')">Edit</button>
                <button onclick="deleteNote('${note._id}')">Delete</button>
            `;
            container.appendChild(noteCard);
        });
    } catch (error) {
        console.error('Error fetching notes:', error);
    }
}

function editNote(id, title, subject, description) {
    document.getElementById('form-title').innerText = 'Edit Note';
    document.getElementById('note-id').value = id;
    document.getElementById('title').value = title;
    
    document.getElementById('subject').value = subject;
    document.getElementById('subject').disabled = true; 
    
    document.getElementById('description').value = description;
    
    document.getElementById('cancel-btn').style.display = 'inline-block';
}

async function deleteNote(id) {
    if (!confirm('Are you sure you want to delete this note?')) return;

    try {
        const response = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
        if (response.ok) {
            fetchNotes(); 
        } else {
            alert('Error deleting note');
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

function resetForm() {
    document.getElementById('form-title').innerText = 'Add Note';
    document.getElementById('note-id').value = '';
    document.getElementById('title').value = '';
    document.getElementById('subject').value = '';
    document.getElementById('subject').disabled = false;
    document.getElementById('description').value = '';
    document.getElementById('cancel-btn').style.display = 'none';
}