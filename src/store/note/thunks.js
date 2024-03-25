import noteService from '../../services/note'
import { readNote } from './noteSlice'



export const visualizeNotes = () => {
    return async dispatch => {
        const viewNote = await noteService.getAll()
        dispatch(readNote(viewNote))
    }
}