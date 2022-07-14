import { motion, AnimatePresence } from 'framer-motion'
import PropTypes from 'prop-types'
import React from 'react'
import FeedbackItem from './FeedbackItem'
function FeedbackList({ items, handleDelete }) {
  {
    if (!(items && items.length > 0)) return <h1>No data Found</h1>
  }
  return (
    <>
      <AnimatePresence>
        {items.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem
              item={item}
              key={item.id}
              handleDelete={handleDelete}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </>
  )
}
FeedbackList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
}

export default FeedbackList
