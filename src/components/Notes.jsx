import React, { useState, useEffect } from 'react';
import NoteForm from './NoteForm';
import NoteList from './NoteList';

const Notes = () => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const storedNotes = JSON.parse(localStorage.getItem('notes'));
        if (storedNotes) {
            setNotes(storedNotes);
        }
    }, []);

    const addNote = (note) => {
        const newNotes = [...notes, note];
        setNotes(newNotes);
        localStorage.setItem('notes', JSON.stringify(newNotes));
    };

    const deleteNote = (index) => {
        const newNotes = notes.filter((_, i) => i !== index);
        setNotes(newNotes);
        localStorage.setItem('notes', JSON.stringify(newNotes));
    };

    return (
        <div>
            <h1>Tutam SBD Modul 9</h1>
            <NoteForm addNote={addNote} />
            <NoteList notes={notes} deleteNote={deleteNote} />
        </div>
    );
};

export default Notes;
