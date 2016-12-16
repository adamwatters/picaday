import Cropper from 'cropperjs-with-background-image-option'
import docReady from 'doc-ready'

const crop = () => {
  docReady(function() {
    const $image = document.getElementById('cropbox')

    if ($image) {

      const previousImageUrl = $image.dataset.previousimageurl
      const $x = document.getElementById('picture_crop_x')
      const $y = document.getElementById('picture_crop_y')
      const $w = document.getElementById('picture_crop_w')
      const $h = document.getElementById('picture_crop_h')
      
      new Cropper($image, {
        viewMode: 1,
        cropBoxBackgroundImage: previousImageUrl,
        modal: false,
        background: false,
        dragMode: 'move',
        responsive: true,
        aspectRatio: 1 / 1,
        zoomable: true,
        scalable: false,
        rotatable: false,
        checkOrientation: false,
        movable: true,
        cropBoxMovable: false,
        cropBoxResizable: false,
        autoCropArea: 1,
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