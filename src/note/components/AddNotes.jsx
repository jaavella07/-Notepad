import noteService from "../../services/note"
import { useDispatch, useSelector } from "react-redux"
import { useForm } from "../../hooks/useForm"
import { createNote } from "../../store/note/noteSlice"

export const AddNotes = () => {

    const dispatch = useDispatch()


    const { noteDescription, onInputChange, onResetForm } = useForm({
        id: "",
        noteDescription: "",
    })

    const addNotes = async (event) => {
        event.preventDefault();

        const nuevaNota = await noteService.addNote(noteDescription);
        console.log("la nueva nota es", nuevaNota);
        
        dispatch(createNote(nuevaNota))
        onResetForm();
    }

    return (
        <>
            <h1>Crear Nota</h1>
            <form onSubmit={addNotes}>
                <div>
                    <input
                        type="text"
                        name="noteDescription"
                        value={noteDescription}
                        onChange={onInputChange}
                    />
                </div>
                <button type="submit">agregar</button>
            </form>
        </>

    )
}
