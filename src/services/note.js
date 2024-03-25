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


const addNote = async ( noteDescription ) => {
  const object = { noteDescription }
  try {
    const response = await axios.post(baseUrl, object)
    //console.log(response);
    return response.data
  }
  catch (error) {
    console.log(error)
  }
}

export default {
  getAll,
  addNote
}