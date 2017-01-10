import React, { Component, PropTypes } from 'react'
import Slider from './Slider'
import Picture from './Picture'
import Streak from './Streak'

class Sequence extends Component {

  static propTypes = {
    pictureURLs: PropTypes.arrayOf(React.PropTypes.string).isRequired,
    userName: PropTypes.string.isRequired,
    userLink: PropTypes.string.isRequired,
    sequenceLink: PropTypes.string.isRequired,
    showUserInfo: PropTypes.bool.isRequired,
    showDeleteLinks: PropTypes.bool.isRequired,
    streak: PropTypes.arrayOf(React.PropTypes.number).isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }

  handleSliderChange = (value) => {
    this.setState({
      value: value
    });
  }

  render() {
    const { pictureURLs, 
            userName,
            userLink,
            sequenceLink,
            showUserInfo,
            showDeleteLinks,
            streak 
          } = this.props
    const numberOfPictures = pictureURLs.length
    const { value } = this.state;
    const ceil = Math.ceil(value);
    const floor = Math.floor(value);

    var pictures = pictureURLs.map(function(url, index){
      const first = index === 0
      if (floor === index) {
        return <Picture opacity={1} first={first} key={index} url={url} />
      } else if (ceil === index) {
        return <Picture opacity={1 - (ceil - value)} first={first} key={index} url={url} />
      } else {
        return <Picture opacity={0} first={first} key={index} url={url} />
      }
    })

    return (
      <div className='sequence'>
        {showUserInfo ? 
          <div className='sequence_info clearfix'>
            <a href={userLink} >{userName}</a>
            <Streak streak={streak} />
          </div> 
          : 
          <div className='sequence_info clearfix'>
            <Streak streak={streak} />
          </div>
        }
        <div className='sequence_pictures'>
          {pictures}
          {showDeleteLinks ? 
            <div className='clearfix'>
              <a className='sequence_delete-button button' data-confirm="Are you sure you want to delete this sequence?" 
               rel="nofollow" 
               data-method="delete" 
               href={sequenceLink}>Delete</a>
              <a className='sequence_delete-button button' href={sequenceLink}>Edit</a>
            </div>
            :
            <span></span>
          }
        </div>
        {numberOfPictures > 1 &&
          <Slider value={value} handleChange={this.handleSliderChange} numberOfPictures={numberOfPictures}/>
        }
      </div>
    );
  }
}

export default Sequence