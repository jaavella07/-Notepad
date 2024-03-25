import { createSlice } from '@reduxjs/toolkit';


//const uid = crypto.randomUUID()


export const noteSlice = createSlice({

    name: 'note',
    initialState:[],
    
    reducers: {

        createNote: ( state,  action  ) => {

            const newNote = action.payload;
            state.push(newNote);
            
        },
        readNote: (state,  action  ) => {
            const read = action.payload
            //console.log('desde readNote',read)
            return read;
        },
        updateNote: (state,  action  ) => {
            console.log(state)
        },
        deleteNote: (state,  action  ) => {

            const del = action.payload

            console.log("slice",del);


            // const noteDelete = state.find(note => note.id === action.payload)
            // console.log(noteDelete);
            // if (noteDelete) {
            //     state.splice(state.indexOf(noteDelete), 1)
            // }
            // console.log(noteDelete);
            return del


        },
    }
});


export const { createNote,readNote,updateNote,deleteNote } = noteSlice.actions;


