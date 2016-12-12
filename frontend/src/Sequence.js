import React, { Component, PropTypes } from 'react'
import Slider from './Slider';
import Picture from './Picture'

class Sequence extends Component {

  static propTypes = {
    pictureURLs: PropTypes.arrayOf(React.PropTypes.string).isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      value: 0 /** Start value **/
    };
  }

  handleSliderChange = (value) => {
    this.setState({
      value: value
    });
  }

  render() {
    const { pictureURLs, description, link } = this.props
    const numberOfPictures = pictureURLs.length
    const { value } = this.state;
    const ceil = Math.ceil(value);
    const floor = Math.floor(value);

    var pictures = pictureURLs.map(function(url, index){
      if (floor === index) {
        return <Picture opacity={1 - (floor - value)} key={description + '-' + index} url={url} />
      } else if (ceil === index) {
        return <Picture opacity={1 - (ceil - value)} key={description + '-' + index} url={url} />
      } else {
        return <Picture opacity={0} key={description + '-' + index} url={url} />
      }
    })

    return (
      <div className='sequence'>
        <div className='pictures'>
          {pictures}
        </div>
        {numberOfPictures > 1 &&
          <Slider value={value} handleChange={this.handleSliderChange} numberOfPictures={numberOfPictures}/>
        }
        <a href={link}>{`Add more photos to - ${description}`}</a>
      </div>
    );
  }
}

export default Sequence