import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeNotes, visualizeNotes } from '../../store/note/thunks';


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

  const updateNotes = () => {

    alert("Agregar logica")

  }

  return (
    <>
      <h1>Visualizacion de Notas</h1>

      {

        visualizerNote.map((note) => (
          <div className="card-note" key={note.id}>
            <textarea className='textarea-update'>{note.noteDescription}</textarea>
            <button className="btn btn-primary" onClick={() => updateNotes(note.id)}>
              Actualizar
            </button>
            <button className="btn btn-danger mx-2" onClick={() => deleteNotes(note.id)}>
              Eliminar
            </button>
          </div>
        ))
      }

    </>
  )
}
