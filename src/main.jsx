import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { TodoContext } from './context/TodaContext.jsx'

createRoot(document.getElementById('root')).render(
  <TodoContext>
    <App />
  </TodoContext>,
)
