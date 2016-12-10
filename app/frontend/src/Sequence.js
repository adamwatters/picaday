import React, { Component, PropTypes } from 'react'

const Picture = ({url}) => {
  return (
  <div>
    <img src={url} role='presentation' />
  </div>
  )
}

Picture.propTypes = {
  url: PropTypes.string.isRequired
}

class Sequence extends Component {

  static propTypes = {
    pictureURLs: PropTypes.arrayOf(React.PropTypes.string).isRequired,
    description: PropTypes.string.isRequired
  }

  render() {
    const { pictureURLs, description } = this.props
    var pictures = pictureURLs.map(function(url, index){
      return <Picture key={description + '-' + index} url={url} />
    })

    return (
      <div>
        {pictures}
      </div>
    );
  }
}

export default Sequence;