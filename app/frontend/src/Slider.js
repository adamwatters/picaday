import React, { Component, PropTypes } from 'react'
import RangeSlider from 'react-rangeslider';

class Slider extends Component {

  static propTypes = {
    numberOfPictures: PropTypes.number.isRequired,
    handleChange: PropTypes.func.isRequired,
    value: PropTypes.number.isRequired
  }

  render() {
    const { value, numberOfPictures, handleChange } = this.props
    return (
        <div>
          <RangeSlider
          value={value}
          onChange={handleChange}
          min={0}
          max={(numberOfPictures - 1)}
          step={.1}
        />
        </div>
    );
  }
}

export default Slider