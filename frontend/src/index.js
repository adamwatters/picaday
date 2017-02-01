import React from 'react'
import ReactDOM from 'react-dom'
import Sequences from './Sequences'
import initCrop from './crop'
import docReady from 'doc-ready'

docReady(() => {

  const root = document.getElementById('root')
  const uploader = document.getElementById('picture_image')

  if(root) {
    const sequencesData = JSON.parse(root.dataset.props)

    ReactDOM.render(
      <Sequences sequences={sequencesData}/>,
      root
    )

  }

  if(uploader) {
    uploader.onchange = function() {
      var size_in_megabytes = this.files[0].size/1024/1024;
      if (size_in_megabytes > 5) {
        alert('Maximum file size is 5MB. Please choose a smaller file.');
      } else {
        document.getElementById('new_picture').submit();
      }
    }
  }

  initCrop();

});
