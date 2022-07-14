import PropTypes from 'prop-types'

function FeedbackStats({ items }) {
  let average =
    items.reduce((acc, cur) => {
      return acc + cur.rating
    }, 0) / items.length
  average = average.toFixed(1)
  //   average = Math.round(average)
  return (
    <div className='feedback-stats'>
      <h4>{items.length} Reviews</h4>
      <h4>Average {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

FeedbackStats.propTypes = {
  items: PropTypes.array.isRequired,
}

export default FeedbackStats
