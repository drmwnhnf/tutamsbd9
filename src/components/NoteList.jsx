import React from 'react';

const NoteList = ({ notes, deleteNote }) => {
    return (
        <div className="note-list">
            {notes.map((note, index) => (
                <div key={index} className="note">
                    <h2>{note.title}</h2>
                    <p>{note.content}</p>
                    <button onClick={() => deleteNote(index)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default NoteList;
