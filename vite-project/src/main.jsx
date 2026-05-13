import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <script src="https://kit.fontawesome.com/4fc5159547.js" crossorigin="anonymous"></script>
  </StrictMode>,
)
