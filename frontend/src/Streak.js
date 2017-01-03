import React, { PropTypes } from 'react'

const isSameDayMonthYear = (a,b) => {
  console.log('next picture date ' + a)
  console.log('counter date ' + b)
  if (a.getFullYear() !== b.getFullYear()) {
    return false
  }
  if (a.getMonth() !== b.getMonth()) {
    return false
  }
  if (a.getDay() !== b.getDay()) {
    return false
  }
  return true
}

const Streak = ({streak}) => {

  const pictureDates = streak.map((s) => {
    const date = new Date(s)
    return date
  })

  const dates = []
  const firstDate = new Date(pictureDates[0].getTime())
  const currentDate = new Date()
  let counter = 0
  const counterDate = new Date(firstDate.getTime())

  while (counterDate <= currentDate) {
    counterDate.setDate(firstDate.getDate() + counter)
    if (isSameDayMonthYear(pictureDates[0], counterDate)) {
      dates.push({
        date: pictureDates.shift(),
        hasPicture: true
      })
    } else {
      dates.push({
        date: new Date(counterDate.getTime()),
        hasPicture: false
      })
    }
    counter += 1
  }

  const dateElements = dates.map(({date, hasPicture}) => {
    return (
    hasPicture ? 
      <div key={date.getTime()} className='tooltip streak_date streak_date__hasPicture'>
        <span className="tooltiptext"> { date.toDateString() } </span>
      </div> :
      <div key={date.getTime()} className='tooltip streak_date'>
        <span className="tooltiptext"> { date.toDateString() } </span>
      </div>
    )
  })

  return  (
    <div className='streak clearfix'>
      <div>{ `First post: ${firstDate.toDateString()}` }</div>
      { dateElements }
    </div>
  )

}

Streak.propTypes = {
  streak: PropTypes.arrayOf(PropTypes.number).isRequired,
}

export default Streak