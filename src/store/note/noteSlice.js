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

            const updatedNote = action.payload;
            console.log("Slice",updatedNote)
            const index = state.findIndex(note => note.id === updatedNote);
            if (index !== -1) {
                state[index] = updatedNote;
            }


        },
        deleteNote: (state, action) => {
            const id = action.payload
            const noteRemove = state.filter(note => note.id !== id);
            return noteRemove
        },
    }
});


export const { createNote, readNote, updateNote, deleteNote } = noteSlice.actions;


