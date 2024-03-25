import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { visualizeNotes } from '../../store/note/thunks';

export const ViewNotes = () => {

    const visualizerNote = useSelector( (state) => state.note )
    const dispatch = useDispatch();

    useEffect(() => {
        
        dispatch(visualizeNotes())    
        
    }, [])

  return (
    <>
    <h1>Visualizacion de Notas</h1>
    {
        visualizerNote.map((note)=>(
            <li key={note.id}>{note.noteDescription}</li>
        ))
    }
    </>
  )
}
