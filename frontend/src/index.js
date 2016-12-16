import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import initCrop from './crop'

const root = document.getElementById('root')

if(root) {
  const sequences = JSON.parse(root.dataset.props)

  ReactDOM.render(
    <App sequences={sequences}/>,
    root
  )

}

initCrop();