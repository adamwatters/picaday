import React, { Component, PropTypes } from 'react'

const Picture = ({url, opacity}) => {
  const pictureStyle = {
    opacity: opacity
  }
  return (
    <img className={'picture'} style={pictureStyle} src={url} role='presentation' />
  )
}

Picture.propTypes = {
  url: PropTypes.string.isRequired,
  opacity: PropTypes.number.isRequired
}

export default Picture