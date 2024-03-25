import { configureStore } from "@reduxjs/toolkit"
import { noteSlice } from "./note"


const store = configureStore({

    reducer: {
        note:noteSlice.reducer,
    },
})

export default store