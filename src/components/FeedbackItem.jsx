import { FaTimes, FaEdit } from 'react-icons/fa'
import PropTypes from 'prop-types'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
import Card from './shared/Card'
function FeedbackItem({ item }) {
  const { deleteItem, editItem } = useContext(FeedbackContext)
  return (
    <>
      <Card>
        <div className='num-display'>{item.rating}</div>
        <button className='close' onClick={() => deleteItem(item.id)}>
          <FaTimes color='purple' />
        </button>
        <button className='edit' onClick={() => editItem(item)}>
          <FaEdit color='purple' />
        </button>
        <div className='text-display'>{item.text}</div>
      </Card>
    </>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default FeedbackItem
