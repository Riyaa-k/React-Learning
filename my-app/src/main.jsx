import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Message from './message.jsx'
import Counter from './components/Counter.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <Message /> */}
    <Counter />

  </React.StrictMode>,
)
