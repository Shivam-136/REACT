import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MyStore from './context-api/Mystore.jsx'

createRoot(document.getElementById('root')).render(
  <MyStore>
    <App />
  </MyStore>
)