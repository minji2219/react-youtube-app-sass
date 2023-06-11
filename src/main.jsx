import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import './scss/main.scss'
import { BrowserRouter } from 'react-router-dom'
import { SearchContextProvider } from './context/SearchContext.jsx'
import { SidebarContextProvier } from './context/SidebarContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <SearchContextProvider>
      <SidebarContextProvier>
        <App />
      </SidebarContextProvier>
    </SearchContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)
