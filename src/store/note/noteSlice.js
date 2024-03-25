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
        updateNote: (state, action) => {
            console.log(state)
        },
        deleteNote: (state, action) => {
            const id = action.payload
            const noteRemove = state.filter(note => note.id !== id);
            return noteRemove
        },
    }
});


export const { createNote, readNote, updateNote, deleteNote } = noteSlice.actions;


