import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import AppContextProvider from './components/context/appContext.js'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <AppContextProvider>
    <App />
    </AppContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
