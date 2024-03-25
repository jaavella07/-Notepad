import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  removeNotes, visualizeNotes } from '../../store/note/thunks';


export const ViewNotes = () => {

    const visualizerNote = useSelector( (state) => state.note )
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(visualizeNotes())    
    }, [])



    const deleteNotes = async ( id ) =>{
      const uid = id
      dispatch(removeNotes(uid))
  }

  return (
    <>
    <h1>Visualizacion de Notas</h1>
    {
        visualizerNote.map((note)=>(
          <div key={note.id}>
            <p>{note.noteDescription}</p>
            <button onClick={()=> deleteNotes(note.id)}>Eliminar</button>
          </div>
        ))
    }
    </>
  )
}
