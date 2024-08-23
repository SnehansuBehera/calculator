import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google'

ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId="496149351368-gd1i5turcb3o86vfm919172euabik77q.apps.googleusercontent.com">
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </GoogleOAuthProvider>

)
