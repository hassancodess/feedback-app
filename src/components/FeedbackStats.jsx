import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackStats() {
  const { items, average } = useContext(FeedbackContext)

  return (
    <div className='feedback-stats'>
      <h4>{items.length} Reviews</h4>
      <h4>Average {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

export default FeedbackStats
