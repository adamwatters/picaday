import React from 'react'
import ReactDOM from 'react-dom'
import Sequences from './Sequences'
import initCrop from './crop'

const root = document.getElementById('root')

if(root) {
  const sequencesData = JSON.parse(root.dataset.props)

  ReactDOM.render(
    <Sequences sequences={sequencesData}/>,
    root
  )

}

initCrop();