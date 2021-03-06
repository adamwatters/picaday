import React, { PropTypes } from 'react'

const Picture = ({url, opacity, first}) => {
  const pictureStyle = {
    opacity: opacity
  }
  if (first) {
    return <img className={'sequence_picture sequence_picture-first'} style={pictureStyle} src={url} role='presentation' />
  } else {
    return <img className={'sequence_picture'} style={pictureStyle} src={url} role='presentation' />
  }
}

Picture.propTypes = {
  url: PropTypes.string.isRequired,
  opacity: PropTypes.number.isRequired,
  first: PropTypes.bool.isRequired
}

export default Picture