$( document ).ready(function() {
  var image = document.getElementById('cropbox');
  var $x = $('#picture_crop_x');
  var $y = $('#picture_crop_y');
  var $w = $('#picture_crop_w');
  var $h = $('#picture_crop_h');
  var cropper = new Cropper(image, {
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
});