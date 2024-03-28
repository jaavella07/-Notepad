import axios from 'axios'

const baseUrl = 'http://localhost:3001/notes'

const getAll = async () => {

  try {
    const response = await axios.get(baseUrl)
    //console.log(response);
    return response.data
  }
  catch (error) {
    console.log(error)
  }
}


const addNote = async (noteDescription) => {
  const object = { noteDescription }
  try {
    const response = await axios.post(baseUrl, object)
    console.log(response);
    return response.data
  }
  catch (error) {
    console.log(error)
  }
}

const deleteNotesId = async (id) => {
  try {
    const response = await axios.delete(`${baseUrl}/${id}`)
    //console.log(response);
    return response.data
  }
  catch (error) {
    console.log("error en la data", error)
  }
}
const updateNotesId = async (id,noteDescription) => {
  const object = { id,noteDescription }
  //console.log("JSON", id)
  try {
    const response = await axios.put(`${baseUrl}/${id}`,object )
    console.log("Estado de mi nota", response);
    return response.data
  }
  catch (error) {
    console.log("error en la data", error)
  }
}




export default {
  getAll,
  addNote,
  deleteNotesId,
  updateNotesId
}