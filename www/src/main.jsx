import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

// function onWindowClose() {
//   window.Neutralino.app.exit();
// }

// window.Neutralino.init();
// window.Neutralino.events.on("windowClose", onWindowClose);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
