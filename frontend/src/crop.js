import Cropper from 'cropperjs'
import docReady from 'doc-ready'


const crop = () => {
  docReady(function() {
    var $image = document.getElementById('cropbox');
    var $x = document.getElementById('picture_crop_x');
    var $y = document.getElementById('picture_crop_y');
    var $w = document.getElementById('picture_crop_w');
    var $h = document.getElementById('picture_crop_h');

    if ($image) {
      
      new Cropper($image, {
        viewMode: 1,
        modal: false,
        background: false,
        dragMode: 'move',
        responsive: true,
        aspectRatio: 1 / 1,
        zoomable: true,
        scalable: false,
        rotatable: true,
        movable: true,
        cropBoxMovable: false,
        cropBoxResizable: false,
        autoCropArea: 1,
        minCanvasHeight: 1,
        crop: function(e) {
          $x.value = e.detail.x;
          $y.value = e.detail.y;
          $w.value = e.detail.width;
          $h.value = e.detail.height;
        }
      });
    }
  });
}

export default crop;