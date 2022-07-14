import PropTypes from 'prop-types'
import { FaTimes } from 'react-icons/fa'
import React, { useState } from 'react'
import Card from './shared/Card'
function FeedbackItem({ item, handleDelete }) {
  return (
    <>
      <Card>
        <div className='num-display'>{item.rating}</div>
        <div className='close' onClick={() => handleDelete(item.id)}>
          <FaTimes />
        </div>
        <div className='text-display'>{item.text}</div>
      </Card>
    </>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default FeedbackItem
