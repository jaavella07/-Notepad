import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeNotes, visualizeNotes, updatedNote } from '../../store/note/thunks';




export const ViewNotes = () => {

  const visualizerNote = useSelector((state) => state.note)
  const dispatch = useDispatch();

  // const [updateNote, setUpdateNote] = useState({
  //   id:"",
  //   noteDescription:""
  // })


  useEffect(() => {
    dispatch(visualizeNotes())
  }, [])



  const deleteNotes = async (id) => {
    const uid = id
    dispatch(removeNotes(uid))
  }

  const updateNoteDescription = (id, newNoteDescription) => {

    console.log("ID de la nota:", id);
    console.log("Nueva descripción de la nota:", newNoteDescription);

    dispatch(updatedNote({ id, noteDescription: newNoteDescription }));
  }

  return (
    <>
      <h1>Visualizacion de Notas</h1>

      <div className="notes-grid" >
        {
          visualizerNote.map((note) => (
            <div key={note.id} className="note-item"  >
              <div className="notes-header">
                <textarea
                  value={note.noteDescription} // Cambiado a 'value' en lugar de 'defaultValue'
                  className="textarea-update"
                  name="noteDescription"
                  onChange={(e) => updateNoteDescription(note.id, e.target.value)} // Manejar cambios en el textarea
                ></textarea>
                <button className="btn btn-primary" onClick={() => updateNoteDescription(note.id, note.noteDescription)}>
                  Actualizar
                </button>
                <button className="btn btn-danger mx-2" onClick={() => deleteNotes(note.id)}>
                  Eliminar
                </button>
              </div>
            </div>
          ))
        }
      </div>


    </>
  )
}
