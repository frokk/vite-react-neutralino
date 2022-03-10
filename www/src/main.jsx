import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

// function onWindowClose() {
//   Neutralino.app.exit();
// }

// Neutralino.init();
// Neutralino.events.on("windowClose", onWindowClose);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
