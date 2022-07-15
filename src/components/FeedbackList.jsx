import { motion, AnimatePresence } from 'framer-motion'
import { useContext } from 'react'
import FeedbackItem from './FeedbackItem'
import FeedbackContext from '../context/FeedbackContext'
function FeedbackList() {
  const { items } = useContext(FeedbackContext)
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
            <FeedbackItem item={item} key={item.id} />
          </motion.div>
        ))}
      </AnimatePresence>
    </>
  )
}

export default FeedbackList
