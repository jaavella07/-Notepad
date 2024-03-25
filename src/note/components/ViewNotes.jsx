import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeNotes, visualizeNotes } from '../../store/note/thunks';
//import { deleteNote } from '../../store/note/noteSlice';


export const ViewNotes = () => {

    const visualizerNote = useSelector( (state) => state.note )
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(visualizeNotes())    
    }, [])

    const deleteNotes = () =>{



      const uid = visualizerNote
      //console.log("id", uid);

      // const eliminarNota = await noteService.deleteNote(uid);
      // console.log("la nueva nota es", eliminarNota);
  
      dispatch(removeNotes(uid))

  }

  return (
    <>
    <h1>Visualizacion de Notas</h1>
    {
        visualizerNote.map((note)=>(
          <div key={note.id}>
            <p>{note.noteDescription}</p>
            <button onClick={deleteNotes}>Eliminar</button>
          </div>
        ))
    }
    </>
  )
}
