import noteService from "../../services/note"
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeNotes, visualizeNotes, updatedNote } from '../../store/note/thunks';




export const ViewNotes = () => {

  const visualizerNote = useSelector((state) => state.note)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(visualizeNotes())
  }, [])



  const deleteNotes = async (id) => {
    const uid = id
    dispatch(removeNotes(uid))
  }

  const updateNoteDescription = async (id, noteDescription) => {

    const nota = { id, noteDescription }
    console.log("Nota capturada:", nota);
    const noteupdate = await noteService.updateNotesId(id, noteDescription);
    console.log("noteService:", noteupdate);
    dispatch(updatedNote(nota));
  }

  return (
    <>
      <h1>Mis notas</h1>

      <div className="notes-grid" >
        {
          visualizerNote.map((note) => (
            <div key={note.id} className="note-item"  >
              <div className="notes-header">
                <textarea
                  value={note.noteDescription}
                  className="textarea-update"
                  name="noteDescription"
                  onChange={(e) => updateNoteDescription(note.id, e.target.value)}
                ></textarea>
                {/* <button className="btn btn-primary" onClick={() => updateNoteDescription(note.id, note.noteDescription)}>
                  Actualizar
                </button> */}
                <div className="d-grid gap-2 d-md-flex justify-content-md-end" >
                  <button className="btn btn-danger mx-2" onClick={() => deleteNotes(note.id)}>
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}
