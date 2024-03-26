import { useEffect, useState } from 'react'
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

  const updateNotes = (id,noteDescription) => {

    dispatch(updatedNote(noteDescription))

  }

  return (
    <>
      <h1>Visualizacion de Notas</h1>

      <div className="notes-grid" >
        {
          visualizerNote.map((note) => ( 
            <div key={note.id} className="note-item"  >
              <div className="notes-header">
                <textarea className='textarea-update' defaultValue={note.noteDescription} ></textarea>
                <button className="btn btn-primary" onClick={() => updateNotes(note.id, note.noteDescription)}>
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
