import React, { PropTypes } from 'react'
import moment from 'moment'

const Streak = ({streak}) => {

  const pictureDates = streak.map((s) => {
    return moment(s)
  })

  const dates = []
  const firstDate = pictureDates[0].clone()
  const currentDate = moment()
  const counterDate = firstDate.clone()

  while (counterDate.isSameOrBefore(currentDate, 'day')) {
    if (pictureDates[0] && pictureDates[0].isSame(counterDate, 'day')) {
      dates.push({
        date: pictureDates.shift(),
        hasPicture: true
      })
      while (pictureDates[0] && pictureDates[0].isSame(counterDate, 'day')) {
        pictureDates.shift()
      }
    } else {
      dates.push({
        date: counterDate.clone(),
        hasPicture: false
      })
    }
    counterDate.add(1,'day')
  }

  const dateElements = dates.map(({date, hasPicture}) => {
    return (
    hasPicture ? 
      <div key={date.format()} className='tooltip streak_date streak_date__hasPicture'>
        <span className="tooltiptext"> { date.format('MMM D') } </span>
      </div> :
      <div key={date.format()} className='tooltip streak_date'>
        <span className="tooltiptext"> { date.format('MMM D') } </span>
      </div>
    )
  })

  return  (
    <div className='streak clearfix'>
      <div>{ `First post: ${firstDate.fromNow()}` }</div>
      { dateElements }
    </div>
  )

}

Streak.propTypes = {
  streak: PropTypes.arrayOf(PropTypes.number).isRequired,
}

export default Streak