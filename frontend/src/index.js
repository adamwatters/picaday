import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Cropper from 'cropperjs'
import docReady from 'doc-ready'

const root = document.getElementById('root')

if(root) {
  const sequences = JSON.parse(root.dataset.props)

  ReactDOM.render(
    <App sequences={sequences}/>,
    root
  )

}

docReady(function() {
  var $image = document.getElementById('cropbox');
  var $x = document.getElementById('#picture_crop_x');
  var $y = document.getElementById('#picture_crop_y');
  var $w = document.getElementById('#picture_crop_w');
  var $h = document.getElementById('#picture_crop_h');

  if ($image) {
    new Cropper($image, {
      aspectRatio: 1 / 1,
      zoomable: false,
      scalable: false,
      rotatable: false,
      movable: false,
      crop: function(e) {
        $x.val(e.detail.x);
        $y.val(e.detail.y);
        $w.val(e.detail.width);
        $h.val(e.detail.height);
      }
    });
  }
});