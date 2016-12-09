# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

jQuery ->
  new PictureCropper()

class PictureCropper
  constructor: ->
    $('#cropbox').Jcrop
      aspectRatio: 1
      setSelect: [0,0,800,800]
      onSelect: @update
      onChange: @update

  update: (coords) =>
    $('#picture_crop_x').val(coords.x)
    $('#picture_crop_y').val(coords.y)
    $('#picture_crop_w').val(coords.w)
    $('#picture_crop_h').val(coords.h)
