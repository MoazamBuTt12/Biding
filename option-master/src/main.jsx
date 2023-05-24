import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import './css/responsive.css'
import "./css/swipercard.css"
import "./css/Form.css"
import { AuthContextProvider } from './context/AuthContext'
import axios from 'axios'

axios.defaults.withCredentials = true;


ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>,
)

