import { useState } from 'react'
import FeedbackContext from './FeedbackContext'
import FeedbackData from '../data/FeedbackData'

const FeedbackProvider = ({ children }) => {
  const [items, setItems] = useState(FeedbackData)
  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id))
  }
  const addItem = (newItem) => {
    setItems([newItem, ...items])
  }

  let average =
    items.reduce((acc, cur) => {
      return acc + cur.rating
    }, 0) / items.length
  average = average.toFixed(1)

  const values = {
    items,
    deleteItem,
    addItem,
    average,
  }
  return (
    <FeedbackContext.Provider value={values}>
      {children}
    </FeedbackContext.Provider>
  )
}
export default FeedbackProvider
