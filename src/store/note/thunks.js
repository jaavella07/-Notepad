import noteService from '../../services/note'
import { deleteNote, readNote, updateNote } from './noteSlice'



export const visualizeNotes = () => {
    return async dispatch => {
        try {
            const viewNote = await noteService.getAll()
            dispatch(readNote(viewNote))
        } catch (error) {
            console.error("Error al leer la nota:", error); 
        }
    }
}

export const removeNotes = (id) => {
    return async (dispatch) => {
      try {
        const noteremove = await noteService.deleteNotesId(id);
        dispatch(deleteNote(id));
      } catch (error) {
        console.error("Error al eliminar la nota:", error);
      }
    };
}

export const updatedNote = (id,noteDescription) => {

    return async (dispatch) => {
      try {
        dispatch(updateNote(id,noteDescription));
      } catch (error) {
        console.error("Error al actualizar la nota:", error);
      }
    };
}

