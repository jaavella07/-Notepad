import noteService from '../../services/note'
import { deleteNote, readNote } from './noteSlice'



export const visualizeNotes = () => {
    return async dispatch => {
        const viewNote = await noteService.getAll()
        dispatch(readNote(viewNote))
    }
}

export const removeNotes = ( ) => {
    return async dispatch => {
        const removeNote = await noteService.deleteNotes()
        dispatch(deleteNote(removeNote))
    }
}