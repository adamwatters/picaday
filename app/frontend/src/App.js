import React, { Component, PropTypes } from 'react'
import Sequence from './Sequence';

class App extends Component {

  static propTypes = {
    sequences: PropTypes.arrayOf(React.PropTypes.object).isRequired
  }

  render() {
    const sequences = this.props.sequences.map(function(s, i){
      return <Sequence  key={s.description} 
                        description={s.description} 
                        pictureURLs={s.pictureURLs} />
    })

    return (
      <div>
        {sequences}
      </div>
    );
  }
}

export default App;