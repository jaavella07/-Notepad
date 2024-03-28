import { createSlice } from '@reduxjs/toolkit';

export const noteSlice = createSlice({

    name: 'note',
    initialState: [],

    reducers: {

        createNote: (state, action) => {

            const newNote = action.payload;
            state.push(newNote);

        },
        readNote: (state, action) => {

            const read = action.payload
            return read;
        },
        updateNotes: (state, action) => {

            const updatedNote = action.payload;
            //console.log("Nota actualizada:", updatedNote);
            return state.map(note =>
                note.id === updatedNote.id ? { ...note, ...updatedNote } : note
            );

        },
        deleteNote: (state, action) => {

            const id = action.payload
            const noteRemove = state.filter(note => note.id !== id);
            return noteRemove
        },
    }
});


export const { createNote, readNote, updateNotes, deleteNote } = noteSlice.actions;


