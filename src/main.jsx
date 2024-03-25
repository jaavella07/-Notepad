import React from 'react'
import ReactDOM from 'react-dom/client'
import store from './store/store'

import { Provider } from 'react-redux'
import { NoteApp } from './NoteApp'


import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <Provider store={store}>
      <NoteApp/>
    </Provider>
  </React.StrictMode>,
)
