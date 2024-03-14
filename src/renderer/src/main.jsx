import './assets/main.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import GlobalDndContext from './utils/dndProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalDndContext>
      <App />
    </GlobalDndContext>
  </React.StrictMode>
)
