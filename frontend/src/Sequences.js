import React, { Component, PropTypes } from 'react'
import Sequence from './Sequence';

class Sequences extends Component {

  static propTypes = {
    sequences: PropTypes.arrayOf(React.PropTypes.object).isRequired
  }

  render() {
    const sequences = this.props.sequences.filter((s) => s.pictureURLs.length > 0).map((s, i) => {
      return <Sequence  key={i} 
                        userLink={s.userLink}
                        userName={s.userName}
                        showUserInfo={s.showUserInfo}
                        streak={s.streak}
                        pictureURLs={s.pictureURLs} />
    })

    return (
      <div>
        {sequences}
      </div>
    );
  }
}

export default Sequences;